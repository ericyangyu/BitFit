/**
 * The profile page displays the current stats about the user and their information.
 * 
 * NOTE: This file needs to be refactored by the authors into a class.
 * 
 * Authors: ?
 */

// library imports
import React, { useState, Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';

// Component imports
import Input from "../components/Input";
import Button from "../components/Button";
import TextField from "../components/Text";

// Resource imports
import profilePhoto from "../resources/profile.png";

/* 
TODO:
- disable save button if no changes made OR if one field is emty
- edit password field
- edit photo fnality
- Make all text centered
- Add logout fnality
*/

export default function Profile() {
  const [name, setName] = useState('First Last');
  const [username, setUsername] = useState('username');
  const [email, setEmail] = useState('user@email.com');
  const [sessions, setSessions] = useState(5);
  const [hours, setHours] = useState(20);
  const [editMode, setEditMode] = useState(false);

  // D for displayed
  const [nameD, setNameD] = useState(name);
  const [usernameD, setUsernameD] = useState(username);
  const [emailD, setEmailD] = useState(email);
  const [sessionsD, setSessionsD] = useState(sessions);
  const [hoursD, setHoursD] = useState(hours);

  const goBack = () => {
    Actions.progress()
  }

  const goToLogIn = () => {
    Actions.login()
  }


  return (editMode ? (
    <View style={styles.profileContainer}>
      <View style={styles.form}>
        <Image source={profilePhoto} style={styles.photo} />
        <Button label='EDIT PHOTO' />

        <TextField>
          Number of Sessions: {sessionsD}     |     Time working out: {hoursD}
        </TextField>
        <Button label='RESET STATS' onPress={() => {
          setSessionsD(0);
          setHoursD(0);
        }} />

        <Input
          placeholder={name}
          onChangeText={name => setNameD(name)}
          defaultValue={name} />
        <Input
          placeholder={username}
          onChangeText={username => setUsernameD(username)}
          defaultValue={username} />
        <Input
          placeholder={email}
          onChangeText={email => setEmailD(email)}
          defaultValue={email} />

        <Button label='SAVE' onPress={() => {
          setName(nameD);
          setUsername(usernameD);
          setEmail(emailD);
          setSessions(sessionsD)
          setHours(hoursD)
          setEditMode(false);
        }} />
        <Button label='CANCEL' onPress={() => {
          setNameD(name);
          setUsernameD(username);
          setEmailD(email);
          setSessionsD(sessions)
          setHoursD(hours)
          setEditMode(false);
        }} />
      </View>
    </View>

  ) : (
      <View style={styles.profileContainer}>
        <View style={{ marginRight: 310 }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image
              style={{ width: 75, height: 75 }}
              source={require('../resources/backbutton.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Image source={profilePhoto} style={styles.photo} />
          <TextField>
            Number of Sessions: {sessionsD}     |     Time working out: {hoursD}
          </TextField>

          <TextField>                             Name: {nameD} </TextField>
          <TextField>                            Username: {usernameD} </TextField>
          <TextField>                          E-mail: {emailD} </TextField>

          <Button label='EDIT PROFILE' onPress={() => { setEditMode(true) }} />
          <Button
            label={'LOGOUT'}
            onPress={() => goToLogIn()}
          />
        </View>
      </View>
    ));
}

// Style for this page
const styles = StyleSheet.create({
  // Style for the profile container
  profileContainer: {
    flex: 1,
    backgroundColor: "#f3ebe1",
    alignItems: "center",
    justifyContent: "space-between"
  },
  // Style for the photo imported
  photo: {
    flex: 1,
    width: "50%",
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 150
  },
  // Style for the from component
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});