import React, { useState } from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const styles = StyleSheet.create({
  profile_view: {
    flex: 1,
    justifyContent: 'center' ,
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#f3ebe1'
  },
  profile_photo: {
    width: 250,
    height: 250
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f3ebe1',
    padding: 10,
    marginBottom: 10
  }
})
function onPress(){
  usernameActual=username
  emailIdActual=emailId
  nameActual=name
}
export default function Profile() {
  const [usernameActual, setUsernameActual] = useState('Username');
  const [emailIdActual, setEmailActual] = useState('Email@id.com');
  const [nameActual, setNameActual] = useState('Full Name');
  const [username, setUsername] = useState('Enter Username');
  const [emailId, setEmail] = useState('Enter email id');
  const [name, setName] = useState('Enter full name');
  const [hrs, setHrs] = useState(20);
  const [sesh, setSesh] = useState(5);


  return (
    <View style={styles.profile_view}>

    <Image style={styles.profile_photo}
        source={require('../../images/profile.png')} alt='Profile Photo' />
    <Text> Total Hrs: {hrs} </Text>
    <Text> No. of sessions: {sesh} </Text>
    <Button  
    title="Click to Reset"
    onPress={() => {
        setHrs(0);
        setSesh(0);    
    }}
    />
    <Text>{usernameActual}</Text>
    <Text>{emailIdActual}</Text>
    <Text>{nameActual}</Text>
    <Button title="Click to Edit"/>

      <TextInput
        placeholder={username}
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        placeholder={name}
        onChangeText={name => setName(name)}
      />
      <TextInput
        placeholder={emailId}
        onChangeText={emailId => setEmail(emailId)}
      />
      <Button 
        title="Click to Save" 
        onPress={() => {
          setNameActual(name);
          setUsernameActual(username);
          setEmailActual(emailId);
        }}
      />
    </View>
  );
}