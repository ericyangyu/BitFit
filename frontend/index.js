/**
 * This is the inital page the app runs when it is entered. 
 * It renders the routes component and disables warnings on the android emulator.
 * 
 * Authors: Sharan, Jaz
 */

// library imports
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// file imports
import { name as appName } from './app.json';
import Routes from './src/routes'

/**
 * Class that handles the intial running of the app and returns the routes object.
 */
export default class BitFit extends Component {
   render() {
      // Removes yellow warnings in Android emulator
      console.disableYellowBox = true;
      // return the routes object
      return (
         <Routes />
      )
   }
}

// Register the app under the name BitFit
AppRegistry.registerComponent(appName, () => BitFit)
