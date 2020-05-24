/**
 * The Routes page is in charge of all routing for all pages on the app.
 * 
 * Authors: Imran, Sharan, Nour
 */

// External imports
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'

// Internal imports

// Routes
import Login from './routes/login'
import SignUp from './routes/sign_up'
import Progress from './routes/progress'
import Profile from './routes/profile'
import Settings from './routes/settings'
import Timer from './routes/timer'
import Trophy from './routes/trophy'
import MainFocusPage from './routes/bodyparts'
import SuggestedWorkoutsPage from './routes/workouts'

/**
 * Class that returns a router object with all the pages.
 */
export default class Routes extends React.Component {
    // Render the all the scenes for the router component
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} initial={true} hideNavBar={true} />
                    <Scene key="signup" component={SignUp} hideNavBar={true} />
                    <Scene key="progress" component={Progress} hideNavBar={true} />
                    <Scene key="profile" component={Profile} hideNavBar={true} />
                    <Scene key="settings" component={Settings} hideNavBar={true} />
                    <Scene key="mainfocus" component={MainFocusPage} hideNavBar={true} />
                    <Scene key="suggestedworkouts" component={SuggestedWorkoutsPage} hideNavBar={true} />
                    <Scene key="timer" component={Timer} hideNavBar={true} />
                    <Scene key="trophy" component={Trophy} hideNavBar={true} />
                </Scene>
            </Router>
        )
    }
}