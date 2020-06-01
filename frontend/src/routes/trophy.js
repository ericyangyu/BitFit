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

// Internal Imports
import api from '../config'

// Components
import Trophy_component from "../components/trophy"

// Images
import backButton from '../images/back_button.png'
import blue from '../images/background.jpg'

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
    let url = 'trophy/get_user_trophies';
    let info = {
      'uid': this.props.uid
    };

    // Make API call
    api.post(url, info)
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
    Actions.pop()
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
              <Image
                style={{ width: "100%", height: 200, opacity: 1.8, position: 'absolute' }}
                source={blue}
              />
              <TouchableOpacity
                style={{ paddingLeft: "2%", marginTop: "12%", marginLeft: 10 }}
                onPress={() => this.goToProgress()}>
                <Image
                  style={{ width: 45, height: 45 }}
                  source={backButton} style={styles.topButton}
                />
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Text style={styles.headerStyle}>Congratulations! </Text>
        </Row>
        <Row> 
          <View style={{flexDirection:'row'}}>
          <Text style={styles.textStyle}> Keep Working Out ! </Text> 
          </View> 
          </Row>
        <Row>
          <View style={styles.whiteBox1}></View>
        </Row>
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