/**
 * The timer page allows the user to time their workouts in a timer.
 * 
 * NOTE: This page needs to be refactored and commented by the authors. It might be 
 * a good idea to split these pages up because we route to them. Style also needs
 * to be put into a single stylesheet. Functions, classes, and methods must be commented.
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

export default class WorkoutTimer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            start: 0,
            now: 0,
            laps: [ ],
        }
    }

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
            this.setState({ now: new Date().getTime()})
        }, 100)
    }

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
        
        // Make API call
        axios.post(url, data)
            // Success
            .then(response => {
                level = response.data[this.props.focus]["level"];
                exp = response.data[this.props.focus]["exp"];
            }).finally(() => {
                // add the duration to total exp
                exp = exp + duration;

                // calculate the new level
                if(level == 0) {
                    level = Math.floor(exp / 1);
                } else {
                    level = Math.floor((exp - (2 * (level) - (level))) / (2 * level));
                }
                console.log([exp, level]);
                
            });


        Actions.stats({duration: duration});

    }

    pause = () => {
        clearInterval(this.timer)
        const { laps, now, start } = this.state
        const [firstLap] = laps
        this.setState({
            laps: [firstLap + now - start],
            start: 0,
            now: 0,
        })
    }
    reset = () => {
        this.setState({
            laps: [],
            start: 0,
            now: 0,
        })
    }
    resume = () => {
        const now = new Date().getTime()
        this.setState({
            start: now,
            now,
        })
        this.timer = setInterval(() => {
        this.setState({ now: new Date().getTime()})}, 100)
    }
    goToProgress = () => {
        Actions.progress()
    }
    render() {
        const { now, start, laps } = this.state
        const timer = now - start
        return (
            <View style={styles.container}>
                <Clock
                    interval={laps.reduce((total, curr) => total + curr, 0) + timer}
                    style={styles.timer}
                />
                <Text style={{color: '#FFFFFF', fontSize: 24}}>{this.props.workout}</Text>
                <Text style={{color: '#FFFFFF'}}>{this.props.focus}</Text>
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
                        title='Reset'
                        color='#FFFFFF'
                        background='#21474A'
                        onPress={this.reset}
                    />
                    <RoundButton
                        title='Resume'
                        color='#50D167'
                        background='#1B361F'
                        onPress={this.resume}
                    />
                </ButtonsRow>
                )}
                <View style={{paddingTop: 110}}>
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