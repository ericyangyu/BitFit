import React, {useState} from 'react';
import {View} from 'react-native';

import api from '../config'
import styles from '../style/r_test';
import Button from '../components/button';
import TextField from '../components/text_field';

function createUser() {
    let baseURL = '/api/user/create_user';
    let payload = {
        'username': 'joe_mama',
        'name': 'Joe Mama',
        'email': 'joe.mama@email.com',
        'photo': 'https://www.profilephotos.com/joe_mama'
    };

    api.post(baseURL, payload)
        .then(function(response) {
            console.log('User created.');
        })
        .catch(function(error) {
            console.log('Server error.')
        });
}

function getUser(username: string) {
    user = {}
    let baseURL = '/api/user/get_username';
    let payload = {
        'username': 'joe_mama',
    };

    api.get(baseURL, payload)
        .then(function(response) {
            user['username'] = response['username'];
        })
        .catch(function(error) {
            console.log('Server error.')
        });

    return user;

}

export default function test() {
    const [username, setUsername] = useState('Tap button for sum DB magic.')
    const [userCreated, setUserCreated] = useState(false)
    
    return ( userCreated ? (
        <View style={styles.container}>
        <View style={styles.form}>
            <TextField>{username}</TextField>
        </View>
        </View>

    ) : (

        <View style={styles.container}>
        <View style={styles.form}>
            <Button label='CREATE USER' onPress={() => {
                // createUser();
                // user = getUser();
                
                setUsername('Database queried.')
                setUserCreated(true)
            }}/>
            <TextField>{username}</TextField>
        </View>
        </View>
    ));
}