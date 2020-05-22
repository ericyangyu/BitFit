/**
 * This is an Trophy image/button that is styled accordingly.
 *
 * Authors: Emily
 */

// External imports
import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

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

  /**
   * Displays the correct image on the front-end depending on if user has achieve trophy or not.
   */
  render() {
    // Saving the props
    const {
      trophy_id,
      date_earned,
      Progress_to_req,
      details,
      ...otherProps
    } = this.props;

    // Display lock image if user has not earned trophy
    if (date_earned === "") {
      return (
        <View>
          <TouchableOpacity onPress={() => alert({ Progress_to_req })}>
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
      <TouchableOpacity onPress={() => alert({ details })}>
        <Image
          style={styles.trophy_img}
          source={trophy_img}
        />
      </TouchableOpacity>
    )
  }
}