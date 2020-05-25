/**
 * The trophy case which contains all of the trophies for the current user.
 * 
 * Authors: Emily
 */

// External Imports
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';


// Internal Imports
// Components
import Trophy_component from "../components/trophy"

// Images
import back_button from '../images/back_button.png'

// Stylesheet
import styles from "../style/r_trophy"


/**
 * This class contains the logic for the frontend to display the trophy case
 */
export default class Trophy extends Component {
  // Call the super constructor and initalize a state variable
  constructor(props) {
    super(props);
    // the response state holds the list of trophies objects returned
    // isLoading allows for the component to render the loading screen intil API call is complete
    this.state = { response: [], isLoading: true };
  }

  componentDidMount() {
    // Indicate which API to call and what data to pass in
    let url = 'http://10.0.2.2:4200/apis/trophy/get_user_trophies';
    let info = {
      'uid': this.props.uid
    };

    // Make API call
    axios.post(url, info)
      // Success
      .then(response => {
        // Save the list of trophies returned and now loading screen can be removed
        this.setState({
          response: response.data,
          isLoading: false
        })
      })

      // Error
      .catch(error => {
        // Log error 
        if (error.response) {
          // Call was unsuccessful
          console.log(error.response.data);
          console.log(error.response.status);
        } else if (error.request) {
          // Request was made but no response was received.
          console.log(error.request);
        } else {
          // Something else cause an error
          console.log('Error', error.message);
        }
      });
  }

  // Route to the progress page when back button is pressed
  goToProgress = () => {
    Actions.progress({ uid: this.props.uid })
  }

  // Render the page
  render() {

    // If the API call is not complete, display the loading screen
    if (this.state.isLoading) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner
            visible={this.state.isLoading}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
        </View>
      )
    }

    return (
      <Grid style={styles.container}>
        <Row>
          <Col>
            <View>
              <TouchableOpacity onPress={this.goToProgress}>
                <Image
                  style={styles.images}
                  source={back_button}
                />
              </TouchableOpacity>
            </View>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Text style={styles.headerStyle}>Congratulations!</Text>
        </Row>
        <Row>
          <Text style={styles.headerStyle}>Keep Working Out to</Text>
        </Row>
        <Row>
          <Text style={styles.headerStyle}>Collect More Trophies!</Text>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <Trophy_component
              date_earned={this.state.response[0].date_earned}
              details={this.state.response[0].details}
            />
          </Col>
          <Col>
            <Trophy_component
              date_earned={this.state.response[1].date_earned}
              details={this.state.response[1].details}
            />
          </Col>
          <Col>
            <Trophy_component
              date_earned={this.state.response[2].date_earned}
              details={this.state.response[2].details}
            />
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <Trophy_component
              date_earned={this.state.response[3].date_earned}
              details={this.state.response[3].details}
            />
          </Col>
          <Col>
            <Trophy_component
              date_earned={this.state.response[4].date_earned}
              details={this.state.response[4].details}
            />
          </Col>
          <Col>
            <Trophy_component
              date_earned={this.state.response[5].date_earned}
              details={this.state.response[5].details}
            />
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <Trophy_component
              date_earned={this.state.response[6].date_earned}
              details={this.state.response[6].details}
            />
          </Col>
          <Col>
            <Trophy_component
              date_earned={this.state.response[7].date_earned}
              details={this.state.response[7].details}
            />
          </Col>
          <Col>
            <Trophy_component
              date_earned={this.state.response[8].date_earned}
              details={this.state.response[8].details}
            />
          </Col>
        </Row>
        <Row></Row>
      </Grid >
    );
  }
}