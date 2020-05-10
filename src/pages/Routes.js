// import { NativeRouter, Route, nativeHistory, Router} from "react-router-native";
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Login from './Login'
import SignUp from './SignUp'
import Progress from './Progress'
import Profile from './Profile'
import { MainFocus, SuggestedWorkouts } from './Workouts'
import Timer from './Timer'

class Routes extends React.Component {
    render () {
        return (
            <Router>
                 <Scene key = "root">
                    <Scene key = "login" component = {Login} initial = {true}  hideNavBar={true} />
                    <Scene key = "signup" component = {SignUp} hideNavBar={true} />
                    <Scene key = "progress" component = {Progress} hideNavBar={true} />
                    <Scene key = "profile" component = {Profile} hideNavBar={true} />
                    <Scene key = "mainfocus" component = {MainFocus} hideNavBar={true} />
                    <Scene key = "suggestedworkouts" component = {SuggestedWorkouts} hideNavBar={true} />
                    <Scene key = "timer" component = {Timer} hideNavBar={true} />
                 </Scene>
            </Router>
        )
    }
}
export default Routes 