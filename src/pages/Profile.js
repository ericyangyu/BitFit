import React, {useState} from 'react';
import {View, Image} from "react-native";

import styles from "../Stylesheet";
import Input from "../components/Input";
import Button from "../components/Button";
import TextField from "../components/Text";
import profilePhoto from "../../images/profile.png";

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

  return (editMode ? (
    <View style={styles.profileContainer}>
      <View style={styles.form}>
        <Image source={profilePhoto} style={styles.photo}/>
          <Button label='EDIT PHOTO'/>

          <TextField>
            Number of Sessions: {sessionsD}     |     Time working out: {hoursD}
          </TextField>
          <Button label='RESET STATS' onPress={() => {
            setSessionsD(0); 
            setHoursD(0);
          }}/>

        <Input 
          placeholder={name}
          onChangeText={name => setNameD(name)}
          defaultValue={name}/>
        <Input
          placeholder={username} 
          onChangeText={username => setUsernameD(username)}
          defaultValue={username}/>
        <Input
          placeholder={email} 
          onChangeText={email => setEmailD(email)}
          defaultValue={email}/>

        <Button label='SAVE' onPress={() => {
          setName(nameD);
          setUsername(usernameD);
          setEmail(emailD);
          setSessions(sessionsD)
          setHours(hoursD)
          setEditMode(false);
        }}/>
        <Button label='CANCEL' onPress={() => {
          setNameD(name);
          setUsernameD(username);
          setEmailD(email);
          setSessionsD(sessions)
          setHoursD(hours)
          setEditMode(false);
        }}/>
      </View>
    </View>

  ) : (
    <View style={styles.profileContainer}>
      <View style={styles.form}>
        <Image source={profilePhoto} style={styles.photo} />
        <TextField>
          Number of Sessions: {sessionsD}     |     Time working out: {hoursD}
        </TextField>

        <TextField>                             Name: {nameD} </TextField>
        <TextField>                            Username: {usernameD} </TextField>
        <TextField>                          E-mail: {emailD} </TextField>

        <Button label='EDIT PROFILE' onPress={() => { setEditMode(true) }}/>
        <Button label='LOGOUT'/>
      </View>
    </View>
  ));
}