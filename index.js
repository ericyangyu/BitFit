/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Login from './src/pages/Login';
import {name as appName} from './app.json';
// import Timer from './src/pages/Timer'
import {MainFocus, SuggestedWorkouts} from './src/pages/Workouts'


// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => MainFocus);
AppRegistry.registerComponent(appName, () => SuggestedWorkouts);

