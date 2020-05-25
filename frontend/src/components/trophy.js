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
  alertprogress_to_req = () => {
    let message = this.props.name;
    let description = "Here is your progress towards this trophy.\n" + "Progress: " + this.props.progress_to_req;
    Alert.alert(
      message,
      description,
      [{ text: 'OK' }],
      { cancelable: false }
    );
  }

  // Display a description and trophy name for trophies the user has gained
  alertDescription = () => {
    let message = 'Congrats on achieving ' + this.props.name + "!";
    let description = this.props.description;
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
      name,
      date_earned,
      progress_to_req,
      description,
      ...otherProps
    } = this.props;

    // Display lock image if user has not earned trophy
    if (date_earned === "") {
      return (
        <View>
          <TouchableOpacity onPress={this.alertprogress_to_req}>
            <Image
              style={styles.lock}
              source={lock}
            />
          </TouchableOpacity>
        </View>
      )
    }

    // Display the trophy image
    return (
      <TouchableOpacity onPress={this.alertDescription}>
        <Image
          style={styles.trophy_img}
          source={trophy_img}
        />
      </TouchableOpacity>
    )
  }
}