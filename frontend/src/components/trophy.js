/**
 * This is an Trophy image/button that is styled accordingly.
 *
 * Authors: Emily
 */

// External imports
import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

/**
 * Class that returns a styled Trophy component.
 */
export default class Trophy extends Component {
  // save the props from when the button is rendered
  // TODO: How does ...otherProps work?
  render() {
    const {
      trophy_id,
      date_earned,
      Progress_to_req,
      details,
      ...otherProps
    } = this.props;

    // Return a styled Trophy component with its original props
    return (
      <View>
        {date_earned.length > 0 ? (
          <TouchableOpacity onPress={() => alert({details})}>
            <Image
              style={styles.trophy_img}
              source={require('../images/' + {trophy_id} + '.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => alert({Progress_to_req})}>
            <Image
              style={styles.trophy_img}
              source={require('../images/lock.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
const styles = {
  trophy_img: {
    width: 75,
    height: 75,
    alignSelf: 'center',
  },
};
