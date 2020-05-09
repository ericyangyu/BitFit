/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Profile from './src/pages/Profile';
import {name as appName} from './app.json';
import {SuggestedWorkouts} from './src/pages/Workouts'
import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'

// AppRegistry.registerComponent(appName, () => Login);
AppRegistry.registerComponent(appName, () => SignUp);
// AppRegistry.registerComponent(appName, () => SuggestedWorkouts);
