/**
 * File: Progress.js
 * 
 * Authors: Emily, Sharan
 *
 * Description: Home page. Shows user's progress bars, has buttons to start a new workout, 
 * and button to go to profile page.
 */
import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity, Dimensions
} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

/**
 * Class: Progress
 * 
 * Description: Returns the html for the home page.
 */
class Progress extends React.Component {
    // Event for button to go to profile page
    goToProfile = () => {
        Actions.profile()
    }
    // Event for button to start a new workout
    goToMainFocus = () => {
        Actions.mainfocus()
    }

    render() {
        const barWidth = 150;
        return (
            <Grid style={styles.container}>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <View>
                            <TouchableOpacity style ={{margin: 10}} onPress={this.goToProfile}>
                                <Image
                                    style={{ width: 75, height: 75 }}
                                    source={require('../resources/profilepic.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </Col>
                </Row>
                <Row></Row>
                <Row>
                    <Text style={styles.headerStyle}>Welcome Back, Name!</Text>
                </Row>
                <Row></Row>
                <Row>
                    <Text style={styles.textStyle}>Overall Level: 6</Text>
                </Row>

                <Row>
                    <Col><Text style={styles.textStyle}>Focus</Text></Col>
                    <Col><Text style={styles.textStyle}>Progress</Text></Col>
                    <Col><Text style={styles.textStyle}>Level</Text></Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={styles.textStyle}>Arms</Text>
                    </Col>
                    <Col>
                    <ProgressBarAnimated
                        useNativeDriver={false}
                        width={barWidth}
                        value={50}
                        backgroundColorOnComplete="#6CC644"
                        />
                    {/* <ProgressBar progress={0.5} color={Colors.red800}
                        style={styles.progressbar} /> */}
                        </Col>
                    <Col>
                        <Text style={styles.textStyle}>4</Text>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={styles.textStyle}>Legs</Text>
                    </Col>
                    <Col>
                    <ProgressBarAnimated
                        width={barWidth}
                        value={50}
                        backgroundColorOnComplete="#6CC644"
                        />
                    {/* <ProgressBar progress={0.5} color={Colors.red800}
                        style={styles.progressbar} /> */}
                        </Col>
                    <Col>
                        <Text style={styles.textStyle}>4</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={styles.textStyle}>Core</Text>
                    </Col>
                    <Col>
                    <ProgressBarAnimated
                        width={barWidth}
                        value={50}
                         backgroundColorOnComplete="#6CC644"
                    />
                    {/* <ProgressBar progress={0.5} color={Colors.red800}
                        style={styles.progressbar} /> */}
                        </Col>
                    <Col>
                        <Text style={styles.textStyle}>4</Text>
                    </Col>
                </Row>

                <Row></Row>
                <Row>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity>
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
                <Row></Row>
            </Grid>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#f3ebe1',
        marginTop: 0,
        alignItems: 'center'
    },
    progressbar: {
        marginTop: 13
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#212143',
        borderRadius: 10,
        borderColor: '#fff',
    },
    buttonTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#fff'
    },
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',

    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0
    },
    box: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        borderWidth: 2,
        marginLeft: 20,
        marginRight: 20
    },
    elementsContainer: {
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    }
}
export default Progress;