import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Routes from './src/routes/routes'

class BitFit extends React.Component {
    render() {
        return <Routes />
    }
}

AppRegistry.registerComponent(appName, () => BitFit);

export default BitFit;