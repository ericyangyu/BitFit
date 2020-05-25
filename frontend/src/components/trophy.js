/**
 * This is an Trophy image/button that is styled accordingly.
 *
 * Authors: Emily
 */

// External imports
import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Alert } from 'react-native';

// Internal imports

// Images
// TODO
import trophy_img from "../images/trophy_1.png";
import lock from "../images/lock.png";

// Stylesheet
import styles from "../style/c_trophy"

/**
 * Class that returns a styled Trophy component.
 */
export default class Trophy_Component extends Component {

  // Display a the progress to req for the trophies the user hasn't gained
  alertLocked = () => {
    let message = this.props.details.trophy_name;
    let description = this.props.details.description;
    Alert.alert(
      message,
      description,
      [{ text: 'OK' }],
      { cancelable: false }
    );
  }

  // Display a description and trophy name for trophies the user has gained
  alertUnlocked = () => {
    let message = 'Congrats on achieving ' + this.props.details.trophy_name + "!";
    let description = "You have completed " + this.props.details.num_completed + " workout(s)!";
    Alert.alert(
      message,
      description,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  }

  /**
   * Displays the correct image on the front-end depending on if user has achieve trophy or not.
   */
  render() {
    // Saving the props
    const {
      date_earned,
      details,
      ...otherProps
    } = this.props;

    // Display lock image if user has not earned trophy
    if (date_earned === "") {
      return (
        <View>
          <TouchableOpacity onPress={this.alertLocked}>
            <Image
              style={styles.lock}
              source={{ uri: this.props.details.hidden_image }}
            />
          </TouchableOpacity>
        </View>
      )
    }

    // Display the trophy image
    return (
      <TouchableOpacity onPress={this.alertUnlocked}>
        <Image
          style={styles.trophy_img}
          source={{ uri: this.props.details.displayed_image }}
        />
      </TouchableOpacity>
    )
  }
}