/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Profile from './src/pages/Profile';
import {name as appName} from './app.json';
import {MainFocus, SuggestedWorkouts} from './src/pages/Workouts'

// AppRegistry.registerComponent(appName, () => Login);
AppRegistry.registerComponent(appName, () => MainFocus);
