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
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

// Internal imports
// Stylesheet
import styles from '../style/r_progress';

// Components
import LoadingScreen from "../components/loading"

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
        let url1 = 'http://10.0.2.2:4200/apis/user/get';
        let data1 = {
            'uid': this.props.uid
        };

        let url2 = 'http://10.0.2.2:4200/apis/bodyparts/get_body_parts';
        let data2 = {}


        let url3 = 'http://10.0.2.2:4200/apis/progress/get';
        let data3 = {
            'uid': this.props.uid
        };

        const requestOne = axios.post(url1, data1);
        const requestTwo = axios.post(url2, data2);
        const requestThree = axios.post(url3, data3);

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
            progressBar = (parseFloat(exp) - (2 * parseInt(level) - 1))
                / (2 * parseInt(level)) * 100
        }
        return progressBar
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
            <Grid style={styles.container}>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <View>
                            <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={this.goToProfile}>
                                <Image
                                    style={styles.imageStyle}
                                    source={{ uri: `data:image/gif;base64,${this.state.avatar}` }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Col>
                </Row>
                <Row></Row>
                <Row>
                    <Text style={styles.headerStyle}>Hi {this.state.fullname}!</Text>
                </Row>
                <Row></Row>
                <Row>
                    <Text style={styles.textStyle}>Overall Level: {this.state.overallLv}</Text>
                </Row>

                <Row>
                    <Col><Text style={styles.textStyle}>Focus</Text></Col>
                    <Col><Text style={styles.textStyle}>Progress</Text></Col>
                    <Col><Text style={styles.textStyle}>Level</Text></Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.body_parts[0]}</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.progress[this.state.body_parts[0]].progressBar}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[0]].level}</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.body_parts[1]}</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.progress[this.state.body_parts[1]].progressBar}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[1]].level}</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.body_parts[2]}</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.progress[this.state.body_parts[2]].progressBar}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[2]].level}</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.body_parts[3]}</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.progress[this.state.body_parts[3]].progressBar}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[3]].level}</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.body_parts[4]}</Text>
                    </Col>
                    <Col>
                        <ProgressBarAnimated
                            useNativeDriver={true}
                            width={150}
                            value={this.state.progress[this.state.body_parts[4]].progressBar}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </Col>
                    <Col>
                        <Text style={styles.textStyle}>{this.state.progress[this.state.body_parts[4]].level}</Text>
                    </Col>
                </Row>

                <Row></Row>
                <Row>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={this.goToTrophy}>
                            <Text style={styles.buttonTextStyle}>
                                Trophy Case
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Row>
                <Row>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={this.goToMainFocus}>
                            <Text style={styles.buttonTextStyle}>
                                Start a New Workout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Row>
                <Row>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={this.goToActivityLog}>
                            <Text style={styles.buttonTextStyle}>
                                Activity Log
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Row>
                <Row></Row>
            </Grid>
        );
    }
}