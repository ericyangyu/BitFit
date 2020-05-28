import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

import Login from './src/routes/login'
import SignUp from './src/routes/sign_up' // PHOTO UPLOAD ISSUE
import Progress from './src/routes/progress' 
import Profile from './src/routes/profile' // PHOTO UPLOAD ISSUE
import Settings from './src/routes/settings'
import MainFocusPage from './src/routes/bodyparts'
import SuggestedWorkoutsPage from './src/routes/workouts'
import Timer from './src/routes/timer'
import Stats from './src/routes/stats'
import Trophy from './src/routes/trophy'
import ActivityLog from './src/routes/activitylog'

export default function App() {
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
              <Scene key="stats" component={Stats} hideNavBar={true} />
              <Scene key="trophy" component={Trophy} hideNavBar={true} />
              <Scene key="activitylog" component={ActivityLog} hideNavBar={true} />
          </Scene>
      </Router>
    );
}

/* CONNECT TO LOCAL HOST FOR API CALLS:
https://stackoverflow.com/questions/47417766/calling-locally-hosted-server-from-expo-app */

/* IMPORT FONTS:
https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4
*/