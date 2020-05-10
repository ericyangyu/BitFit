/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routes from './src/pages/Routes'

class BitFit extends React.Component {
    render() {
       return (
          <Routes />
       )
    }
 }
 export default BitFit
 AppRegistry.registerComponent(appName, () => BitFit)

// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Progress);
// AppRegistry.registerComponent(appName, () => SuggestedWorkouts);
