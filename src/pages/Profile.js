import React,{ Component, useState } from 'react';
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

export default function Profile() {
  const [usernameActual, setUsernameActual] = useState('Username');
  const [emailIdActual, setEmailActual] = useState('Email@id.com');
  const [nameActual, setNameActual] = useState('Full Name');
  const [username, setUsername] = useState(usernameActual);
  const [emailId, setEmail] = useState(emailIdActual);
  const [name, setName] = useState(nameActual);
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
        placeholder={'Enter Username'}
        onChangeText={username => setUsername(username)}
        defaultValue={username}
      />
      <TextInput
        placeholder={'Enter email id'}
        onChangeText={emailId => setEmail(emailId)}
        defaultValue={emailId}
      />
      <TextInput
        placeholder={'Enter full name'}
        onChangeText={name => setName(name)}
        defaultValue={name}
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