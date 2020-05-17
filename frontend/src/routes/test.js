import React, {useState} from 'react';
import {View} from 'react-native';

// import api from '../config'
import styles from '../style/r_test';
import Button from '../components/button';
import TextField from '../components/text_field';

import axios, { AxiosInstance } from 'axios';

function createUser() {

    //console.log('User created')

    let baseURL = 'http://10.0.2.2:4200/apis/user/create_user';
    let payload = {
        'username': 'joe_mama',
        'name': 'Joe Mama',
        'email': 'joe.mama@email.com',
        'photo': 'https://www.profilephotos.com/joe_mama'
    };

    axios.post(baseURL, payload)
        .then(function(response) {
            console.log("RESPONSE:")
            console.log(response["data"]["reason"]);
        })
        .catch(function(error) {
            console.log("ERROR:")
            console.log(error)
        }); 
}

function getUser(username: string) {
    return "HELLO"

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
                createUser();
                user = getUser();
                
                setUsername('Database queried.')
                setUserCreated(true)
            }}/>
            <TextField>{username}</TextField>
        </View>
        </View>
    ));
}