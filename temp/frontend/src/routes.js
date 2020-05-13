import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'

import test from './routes/test'

class Routes extends React.Component {
    render () {
        return (
            <Router>
                 <Scene key='root'>
                    <Scene key='test' component={test} initial={true}
                           hideNavBar={true} />
                 </Scene>
            </Router>
        )
    }
}
export default Routes;