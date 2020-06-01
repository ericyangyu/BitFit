/**
 * The timer page allows the user to time their workouts. Also calculates progress.
 * Timer has start, pause, resume, cancel, and finish functionality.
 * Clicking finish will update progress and take you to the stats page.
 * 
 * Authors: Steven, Jeremy
 */

// External Imports
import React, { Component } from 'react';
import { Image, View, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

// internal imports (useful components)
import api from '../config'
import Clock from '../components/timer_components/clock';
import ButtonsRow from '../components/timer_components/button_row';
import RoundButton from '../components/timer_components/round_button';

// Stylesheet
import styles from '../style/r_timer';
import blue from '../images/login_background.jpg';

/**
 * Renders the timer page, and handles calculation of leveling
 */
export default class WorkoutTimer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            start: 0,
            now: 0,
            laps: [],
            body_parts: {}
        }
    }

    // reset timer (currently not interacting with back button)
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    goToStats = (duration) => {
        console.log("In goToStats()...")
        Actions.stats({
            uid: this.props.uid,
            duration: duration,
            focus: this.props.focus,
            workout: this.props.workout,
            leveledUp: this.props.leveledUp
        });

    }

    get_body_parts = () => {
        // Indicate which API to call and what data to pass in
        let url = 'bodyparts/get_body_parts';
        api.post(url)
            // Success
            .then(response => {
                let body_parts = {}
                for (var body_part_id in response.data) {
                    body_parts[response.data[body_part_id].body_part_name] = body_part_id;
                }

                this.setState({
                    body_parts: body_parts,
                })
                console.log("In get_body_parts()...")
                this.getStats()
            })
            .catch(error => {
                // Log error 
                if (error.response) {
                    // Call was unsuccessful
                    console.log(error.response.data);
                    console.log(error.response.status);
                } else if (error.request) {
                    // Request was made but no response was received.
                    console.log(error.request);
                } else {
                    // Something else cause an error
                    console.log('Error', error.message);
                }
            });
    }

    // Describe what each button does
    start = () => {
        const now = new Date().getTime()
        this.setState({
            start: now,
            now,
            laps: [0],
        })
        this.timer = setInterval(() => {
            this.setState({ now: new Date().getTime() })
        }, 100)
    }

    updateStats = (exp, level, duration) => {
        let body_part_id = this.state.body_parts[this.props.focus]

        /**
         * Save progress in backend
         */
        let url = 'progress/update_stats';
        let data = {
            'uid': this.props.uid,
            'body_part_id': body_part_id,
            'exp': exp,
            'level': level
        };
        api.post(url, data)
            .then(response => {
                // console.log(response.data)
                console.log("In updateStats()...")
                this.goToStats(duration)
            })

            .catch((error) => {
                console.log("Update progress call error");
                alert(error.message);
            });
    }

    calculateStats = (exp, level) => {
        const { laps, now, start } = this.state;
        const timer = now - start;
        // calculates the duration of the workout in hours rounded to 2 decimal places
        const duration = parseFloat(((laps.reduce((total, curr) => total + curr, 0) + timer) / 1000 / 3600 * 60).toFixed(2));
        let leveledUp = false;

        exp = exp + duration;

        // calculate the new level
        if (level == 0) {
            if (exp >= 1) {
                level = 1;
                while (exp >= (Math.pow((level + 1), 2) - (level))) {
                    level = level + 1;
                    leveledUp = true;
                }
            }
        } else {
            while (exp >= (Math.pow((level + 1), 2) - (level))) {
                level = level + 1;
                leveledUp = true;
            }
        }
        console.log("In calculateStats()...")
        this.updateStats(exp, level, duration)
    }

    getStats = () => {
        let body_part_id = this.state.body_parts[this.props.focus]
        let url = 'progress/get';
        let data = {
            'uid': this.props.uid
        };

        api.post(url, data)
            // Success
            .then(response => {
                // need to come back here and make sure user actually has focus defined
                let level = response.data[body_part_id].level;
                let exp = response.data[body_part_id].exp;
                console.log("In getStats()...")
                this.calculateStats(exp, level)
            })
            .catch((error) => {
                console.log("Get progress call error");
                alert(error.message);
            })
    }

    // ends the workout and calculate levels
    finish = () => {
        console.log("In Finish...")
        this.get_body_parts()
    }

    // pause timer
    pause = () => {
        clearInterval(this.timer)
        const { laps, now, start } = this.state
        const [firstLap] = laps
        // save current time elapsed
        this.setState({
            laps: [firstLap + now - start],
            start: 0,
            now: 0,
        })
    }

    // reset timer
    reset = () => {
        this.setState({
            laps: [],
            start: 0,
            now: 0,
        })
    }

    // restart timer
    resume = () => {
        const now = new Date().getTime()
        this.setState({
            start: now,
            now,
        })
        this.timer = setInterval(() => {
            this.setState({ now: new Date().getTime() })
        }, 100)
    }

    // return to home page on cancel button
    goToProgress = () => {
        Actions.progress({ uid: this.props.uid })
    }

    // renders the clock components and all the timer buttons
    render() {
        const { now, start, laps } = this.state
        const timer = now - start
        return (
            <View style={styles.container} >
                <Image source={blue} style={styles.backgroundImage} />
                <Clock
                    interval={laps.reduce((total, curr) => total + curr, 0) + timer}
                    style={styles.timer}
                />
                <Text style={{ color: '#FFFFFF', fontSize: 24 }}>{this.props.workout}</Text>
                <Text style={{ color: '#FFFFFF' }}>{this.props.focus}</Text>
                {laps.length === 0 && (
                    <ButtonsRow>
                        <RoundButton
                            title='Finish'
                            color='#8B8B90'
                            background='#151515'
                            disabled
                        />
                        <RoundButton
                            title='Start'
                            color='#50D167'
                            background='#1B361F'
                            onPress={this.start}
                        />
                    </ButtonsRow>
                )
                }
                {start > 0 && (
                    <ButtonsRow>
                        <RoundButton
                            title='Finish'
                            color='#FFFFFF'
                            background='#3D3D3D'
                            onPress={this.finish}
                        />
                        <RoundButton
                            title='Pause'
                            color='#E33935'
                            background='#3C1715'
                            onPress={this.pause}
                        />
                    </ButtonsRow>
                )}
                {
                    laps.length > 0 && start === 0 && (
                        <ButtonsRow>
                            <RoundButton
                                title='Finish'
                                color='#FFFFFF'
                                background='#3D3D3D'
                                onPress={this.finish}
                            />
                            <RoundButton
                                title='Resume'
                                color='#50D167'
                                background='#1B361F'
                                onPress={this.resume}
                            />
                        </ButtonsRow>
                    )
                }
                <View style={{ paddingTop: 110 }}>
                    <Button
                        title='Cancel Workout'
                        color='#E33935'
                        onPress={this.goToProgress}
                    />
                </View>
            </View >
        )
    }
}