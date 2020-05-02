import React, { useState } from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button, Alert} from 'react-native';

/*
 NEEDS FIXING:
 - Values need to be updated only when save is pressed, not on text change
 - Keyboard hides text input
 - Text fields can only input one letter (Nour only)
 - Make page look better
*/

const styles = StyleSheet.create({
  profile_view: {
    flex: 1,
    // justifyContent: 'center' ,
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#f3ebe1'
  },
  profile_photo: {
    width: 250,
    height: 250,
    marginBottom: 10
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
  const [editMode, setEditMode] = useState(false);

  return (editMode ? (
    <View style={styles.profile_view}>
      <Image style={styles.profile_photo}
        source={require('../../images/profile.png')} alt='Profile Photo' />
      <Button title='edit photo' />

      <Text> Workout Time: {hrs} </Text>
      <Text> Number of Sessions: {sesh} </Text>
      <Button title='reset your stats' onPress={() => {
        Alert.alert(
          'ARE YOU SURE?',
          'This action is not revertible.',
          [
            {
              text: 'Cancel',
            },
            { text: 'OK', 
              onPress: () => { 
                setHrs(0);
                setSesh(0);
              }
            }
          ],
          { cancelable: false }
        );  
      }} />

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
        title="Save" 
        onPress={() => {
          setNameActual(name);
          setUsernameActual(username);
          setEmailActual(emailId);
          setEditMode(false);
        }}
      />
      <Button title='Cancel' onPress={() => {
          setUsername(usernameActual);
          setEmail(emailIdActual);
          setName(nameActual);
          setEditMode(false); 
        }} />
    </View>

    ) : (

    <View style={styles.profile_view}>
      <Image style={styles.profile_photo}
        source={require('../../images/profile.png')} alt='Profile Photo' />

      <Text> Workout Time: {hrs} </Text>
      <Text> Number of Sessions: {sesh} </Text>
      <Text> Name: {name} </Text>
      <Text> Username: {username} </Text>
      <Text> E-mail: {emailId} </Text>

      <Button title='edit profile' onPress={() => { setEditMode(true) }} />
    </View>
  ));
}