/**
 * @format
 */

import {AppRegistry} from 'react-native';

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';

import {name as appName} from './app.json';
import {SuggestedWorkouts} from './src/pages/Workouts'

// AppRegistry.registerComponent(appName, () => Login);
AppRegistry.registerComponent(appName, () => SuggestedWorkouts);
