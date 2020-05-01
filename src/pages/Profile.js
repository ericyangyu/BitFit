import React from 'react';
import {View, Image} from 'react-native';
import styles from '../Stylesheet'

const Profile = () => {
  return (
    <View style={styles.profile_view}>
      
      <Image style={styles.profile_photo}
             source={require('../../images/profile.png')} alt='Profile Photo' />

    </View>
  )
}

export default Profile;