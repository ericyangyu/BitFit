/**
 * The Progress page displays the current state of the user's progress. It allows
 * the user to view and edit their profile information. It allows the user to start a new workout
 * or choose to see their trophy case.
 * 
 * Authors: Imran, Sharan, Nour
 */

// External imports
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

// Internal imports
import api from '../config'

// Components
import NavBar from "../components/nav_bar";
import LoadingScreen from "../components/loading";

// Images
import blue from '../images/background.jpg'

// Stylesheet
import styles from '../style/r_progress';


/**
 * Class that returns the Progress page with correct components and API calls.
 */
export default class Progress extends Component {

    // Call the super constructor and initalize a state variable
    constructor(props) {
        super(props)
        this.state = {
            fullname: "",
            avatar: "",
            overallLv: 0,
            progress: {},
            body_parts: [],
            isLoading: true
        }
    }

    // Route to the trophy page when the trophy button is pressed
    goToTrophy = () => {
        Actions.trophy({ uid: this.props.uid })
    }

    // Route to the profile page when the profile button is pressed
    goToProfile = () => {
        Actions.profile({ uid: this.props.uid })
    }

    // Route to the main start a new workout page when start a new workout button is pressed
    goToMainFocus = () => {
        Actions.mainfocus({ uid: this.props.uid })
    }

    // Route to the activity log page when activity log button pressed
    goToActivityLog = () => {
        Actions.activitylog({ uid: this.props.uid })
    }

    getData = () => {
        let url1 = 'user/get';
        let data1 = {
            'uid': this.props.uid
        };

        let url2 = 'bodyparts/get_body_parts';
        let data2 = {}


        let url3 = 'progress/get';
        let data3 = {
            'uid': this.props.uid
        };

        const requestOne = api.post(url1, data1);
        const requestTwo = api.post(url2, data2);
        const requestThree = api.post(url3, data3);

        axios
            .all([requestOne, requestTwo, requestThree])
            .then(
                axios.spread((...responses) => {
                    const userData = responses[0].data;
                    const bodypartsData = responses[1].data;
                    const progressData = responses[2].data;

                    let progress = {}
                    let body_parts = []
                    let overallLv = 0;
                    for (var body_part_id in progressData) {
                        let body_part_name = bodypartsData[body_part_id].body_part_name
                        let exp = progressData[body_part_id]

                        body_parts.push(body_part_name)
                        exp['progressBar'] = this.calculateProgess(exp.exp, exp.level)
                        progress[body_part_name] = exp
                        overallLv += parseInt(exp.level)
                    }
                    this.setState({
                        progress: progress,
                        body_parts: body_parts,
                        fullname: userData.fullname,
                        avatar: userData.avatar,
                        overallLv: overallLv,
                        isLoading: false
                    })

                })
            )
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });
    }

    calculateProgess(exp, level) {
        let progressBar = 0.0
        if (parseInt(level) == 0) {
            progressBar = parseFloat(exp) * 100

        } else {
            progressBar = (parseFloat(exp) - (Math.pow(parseInt(level), 2) - (parseInt(level) - 1)))
                / (2 * parseInt(level)) * 100
        }
        return progressBar
    }

    componentWillReceiveProps = () => {
        this.componentDidMount()
    }

    // Make API calls when the screen mounts
    componentDidMount() {
        this.getData()
    }

    // Render the correct components for the Progress screen
    render() {
        // If the API call is not complete, display the loading screen
        if (this.state.isLoading) {
            return (
                <LoadingScreen></LoadingScreen>
            )
        }
        // const { progress } = this.state;
        // return (
        //     Object.keys(progress).map((key, index) => (
        //         <Text>Body Part:{key}, Level:{progress[key].level}, Exp:{progress[key].exp}</Text>
        //     ))
        // );
        return (
            <View style={styles.container}>
                <Image style={styles.backImage} source={blue} />

                <NavBar
                    left={{ uri: `data:image/gif;base64,${this.state.avatar}` }}
                    leftOnPress={this.goToProfile}>
                </NavBar>

                <Text style={styles.header}>Hi {this.state.fullname}!</Text>

                <View elevation={5} style={styles.whiteBox1}>
                    <Text style={styles.levelText}>Overall Level: {this.state.overallLv} </Text>
                </View>

                <View elevation={5} style={styles.whiteBox2}>
                    <Row style={styles.row}>
                        <Col><Text style={styles.progressText}>Focus</Text></Col>
                        <Col><Text style={styles.progressText}>Progress</Text></Col>
                        <Col><Text style={styles.progressText}>Level</Text></Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col>
                            <Text style={styles.progressText}>{this.state.body_parts[0]}</Text>
                        </Col>
                        <Col>
                            <ProgressBarAnimated
                                useNativeDriver={true}
                                width={110}
                                value={this.state.progress[this.state.body_parts[0]].progressBar}
                                backgroundColorOnComplete="#6CC644"
                            />
                        </Col>
                        <Col>
                            <Text style={styles.progressText}>{this.state.progress[this.state.body_parts[0]].level}</Text>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col>
                            <Text style={styles.progressText}>{this.state.body_parts[1]}</Text>
                        </Col>
                        <Col>
                            <ProgressBarAnimated
                                useNativeDriver={true}
                                width={110}
                                value={this.state.progress[this.state.body_parts[1]].progressBar}
                                backgroundColorOnComplete="#6CC644"
                            />
                        </Col>
                        <Col>
                            <Text style={styles.progressText}>{this.state.progress[this.state.body_parts[1]].level}</Text>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col>
                            <Text style={styles.progressText}>{this.state.body_parts[2]}</Text>
                        </Col>
                        <Col>
                            <ProgressBarAnimated
                                useNativeDriver={true}
                                width={110}
                                value={this.state.progress[this.state.body_parts[2]].progressBar}
                                backgroundColorOnComplete="#6CC644"
                            />
                        </Col>
                        <Col>
                            <Text style={styles.progressText}>{this.state.progress[this.state.body_parts[2]].level}</Text>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col>
                            <Text style={styles.progressText}>{this.state.body_parts[3]}</Text>
                        </Col>
                        <Col>
                            <ProgressBarAnimated
                                useNativeDriver={true}
                                width={110}
                                value={this.state.progress[this.state.body_parts[3]].progressBar}
                                backgroundColorOnComplete="#6CC644"
                            />
                        </Col>
                        <Col>
                            <Text style={styles.progressText}>{this.state.progress[this.state.body_parts[3]].level}</Text>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col>
                            <Text style={styles.progressText}>{this.state.body_parts[4]}</Text>
                        </Col>
                        <Col>
                            <ProgressBarAnimated
                                useNativeDriver={true}
                                width={110}
                                value={this.state.progress[this.state.body_parts[4]].progressBar}
                                backgroundColorOnComplete="#6CC644"
                            />
                        </Col>
                        <Col>
                            <Text style={styles.progressText}>{this.state.progress[this.state.body_parts[4]].level}</Text>
                        </Col>
                    </Row>
                </View>

                <View style={styles.nav}>
                    <Col><TouchableOpacity onPress={this.goToMainFocus}>
                            <Icon size={40} color='white' name='timer' />
                            <Text style={styles.navText}>Workout</Text>
                    </TouchableOpacity></Col>
                    <Col><TouchableOpacity onPress={this.goToTrophy}>
                            <Icon size={40} color='white' name='lock' />
                            <Text style={styles.navText}>Trophy Case</Text>
                    </TouchableOpacity></Col>
                    <Col><TouchableOpacity onPress={this.goToActivityLog}>
                            <Icon size={40} color='white' name='assignment' />
                            <Text style={styles.navText}>Activity Log</Text>
                    </TouchableOpacity></Col>
                </View> 
            </View>
        );
    }
}