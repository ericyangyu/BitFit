import React, { Component } from 'react';
 import { Router, Scene } from 'react-native-router-flux'

 import Login from './routes/login'
 import SignUp from './routes/sign_up'
 import Progress from './routes/progress'
 import Profile from './routes/profile'
 import Timer from './routes/timer'
 import { MainFocus, SuggestedWorkouts } from './routes/workouts'

 class Routes extends React.Component {
     render () {
         return (
            <Router>
                <Scene key='root'>
                    <Scene key = "login" component = {Login} initial = {true}
                        hideNavBar={true} />
                    <Scene key = "signup" component = {SignUp} 
                        hideNavBar={true} />
                    <Scene key = "progress" component = {Progress}
                        hideNavBar={true} />
                    <Scene key = "profile" component = {Profile} 
                           hideNavBar={true} />
                    <Scene key = "timer" component = {Timer}
                           hideNavBar={true} />
                    <Scene key = "suggestedworkouts" 
                           component = {SuggestedWorkouts} hideNavBar={true} />
                </Scene>
            </Router>
         )
     }
 }

 export default Routes;