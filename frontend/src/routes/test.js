import React, {useState} from 'react';
import {View} from "react-native";

import styles from "../style/r_test";
import Button from "./src/components/button";
import TextField from "./src/components/text_field";

export default function test() {
    const [username, setUsername] = useState('Username will apear here')
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
            // DATABASE CALL GOES BELOW!!!!
            setUsername('DATABASE CALL')
            setUserCreated(true)
            }}/>
            <TextField>{username}</TextField>
        </View>
        </View>
    ));
}