/**
 * The timer page allows the user to time their workouts. Also calculates progress.
 * Timer has start, pause, resume, cancel, and finish functionality.
 * Clicking finish will update progress and take you to the stats page.
 * 
 * Authors: Steven, Jeremy
 */

// External Imports
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from "axios";

// internal imports (useful components)
import Clock from '../components/timer_components/clock';
import ButtonsRow from '../components/timer_components/button_row';
import RoundButton from '../components/timer_components/round_button';

// Stylesheet
import styles from '../style/r_timer';

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
        }
    }

    // reset timer (currently not interacting with back button)
    componentWillUnmount() {
        clearInterval(this.timer)
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

    // ends the workout and calculate levels
    finish = () => {
        const { laps, now, start } = this.state;
        const timer = now - start;
        // calculates the duration of the workout in hours rounded to 2 decimal places
        const duration = parseFloat(((laps.reduce((total, curr) => total + curr, 0) + timer) / 1000 / 3600).toFixed(2));

        let url = 'http://10.0.2.2:4200/apis/progress/get';
        let data = {
            'uid': this.props.uid
        };

        let level = 0;
        let exp = 0;
        let leveledUp = false;

        /**
         * Retrieve current level and experience then calculate new level and experience
         */
        axios.post(url, data)
            // Success
            .then(response => {
                // need to come back here and make sure user actually has focus defined
                level = parseInt(response.data[this.props.focus]["level"]);
                exp = parseFloat(response.data[this.props.focus]["exp"]);
                exp = exp + duration;

                // calculate the new level
                if (level == 0) {
                    if (exp >= 1) {
                        level = 1;
                        while ((exp - (2 * (level) - 1)) >= (2 * level)) {
                            level = level + 1;
                            leveledUp = true;
                        }
                    }
                } else {
                    while ((exp - (2 * (level) - 1)) >= (2 * level)) {
                        level = level + 1;
                        leveledUp = true;
                    }
                }

                /**
                 * Save progress in backend
                 */
                url = 'http://10.0.2.2:4200/apis/progress/update_stats';
                data = {
                    'uid': this.props.uid,
                    'body_part': this.props.focus,
                    'exp': exp.toString(),
                    'level': level.toString()
                };
                console.log("DATA");
                console.log(data);
                axios.post(url, data)
                    .then(response => {
                        console.log(response.data)
                    })
                    
                    .catch((error)=>{
                        console.log("Update progress call error: Timer.js");
                        console.log(error.response.data);
                        alert(error.message);
                    });
                console.log("Get Success");
            })
           
            .catch((error)=>{
                console.log("Get progress call error: Timer.js");
                console.log(error.response.data);
                alert(error.message);
            })
            
            .finally(() => {
                Actions.stats({ uid: this.props.uid,
                                duration: duration,
                                focus: this.props.focus,
                                workout: this.props.workout,
                                leveledUp: this.props.leveledUp });
            });

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
        Actions.progress({uid: this.props.uid})
    }

    // renders the clock components and all the timer buttons
    render() {
        const { now, start, laps } = this.state
        const timer = now - start
        return (
            <View style={styles.container}>
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
                )}
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
                {laps.length > 0 && start === 0 && (
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
                )}
                <View style={{ paddingTop: 110 }}>
                    <Button
                        title='Cancel Workout'
                        color='#E33935'
                        onPress={this.goToProgress}
                    />
                </View>
            </View>
        )
    }
}