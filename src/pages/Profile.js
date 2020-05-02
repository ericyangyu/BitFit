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
  const [workTime, setWorkTime] = useState(0);
  const [numSessions, setNumSessions] = useState(0);
  const [name, setName] = useState('First Last');
  const [username, setUsername] = useState('username');
  const [email, setEmail] = useState('user@email.com');

  const [editMode, setEditMode] = useState(false);

  return (editMode ? (
    <View style={styles.profile_view}>
      <Image style={styles.profile_photo}
        source={require('../../images/profile.png')} alt='Profile Photo' />
      <Button title='edit photo' />

      <Text> Workout Time: {workTime} </Text>
      <Text> Number of Sessions: {numSessions} </Text>
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
                setWorkTime(0);
                setNumSessions(0);
              }
            }
          ],
          { cancelable: false }
        );  
      }} />

      <TextInput placeholder={name} onChangeText={name => setName(name)} />
      <TextInput placeholder={username}
        onChangeText={username => setUsername(username)} />
      <TextInput placeholder={email} onChangeText={email => setEmail(email)} />

      <Button title='save' />
      <Button title='cancel' onPress={() => { setEditMode(false) }} />
    </View>

    ) : (

    <View style={styles.profile_view}>
      <Image style={styles.profile_photo}
        source={require('../../images/profile.png')} alt='Profile Photo' />

      <Text> Workout Time: {workTime} </Text>
      <Text> Number of Sessions: {numSessions} </Text>
      <Text> Name: {name} </Text>
      <Text> Username: {username} </Text>
      <Text> E-mail: {email} </Text>

      <Button title='edit profile' onPress={() => { setEditMode(true) }} />
    </View>
  ));
}