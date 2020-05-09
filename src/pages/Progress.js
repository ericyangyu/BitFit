import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity, Dimensions
} from 'react-native';
// import { ProgressBar, Colors } from 'react-native-paper';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Col, Row, Grid } from "react-native-easy-grid";

 class Progress extends React.Component {
    render() {
        const barWidth = 150;
        return (
            <Grid style={styles.container}>
                <Row>
                    <Col>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 75, height: 75 }}
                                    source={require('../resources/backbutton.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <View>
                            <TouchableOpacity>
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
                        <TouchableOpacity>
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