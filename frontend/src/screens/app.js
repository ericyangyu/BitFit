import React, {useState} from 'react';
import {View} from "react-native";

import styles from "../stylesheet";
import Button from "../components/button";
import TextField from "../components/text_field";

export default function profile() {
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