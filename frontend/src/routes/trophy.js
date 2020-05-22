/**
 * The trophy case which contains all of the trophies for the current user.
 * 
 * Authors: Emily
 */

// External Imports
import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


// Internal Imports
// Components
import Trophy_component from "../components/trophy"

// Images
import profile_photo from '../images/profile_photo.png'
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
    this.state = { response: [] };
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
        /* Navigate to progress page and pass uid as prop. This allows
        the next page to know which user is logged in */
        const data = response.data;
        this.setState({
          response: data
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
    if (this.state.response === []) {
      return <Text>Loading...</Text>
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
            {/* <Trophy_component
              name={this.state.response[0].details}
              date_earned={this.state.response[0].date_earned}
              Progress_to_req={this.state.response[0].Progress_to_req}
              description={this.state.response[0].details.description}
            /> */}
          </Col>
          <Col>
            {/* <Trophy_component
              trophy_id={this.state.response.data[1].details.name}
              date_earned={this.state.response.data[1].date_earned}
              Progress_to_req={this.state.response.data[1].Progress_to_req}
              details={this.state.response.data[1].details.description}
            /> */}
          </Col>
          <Col>
            <TouchableOpacity
              onPress={() =>
                // alert('Some information about how you earned this trophy')
                console.log(this.state.response[0].details.description)
              }>
              <Image
                style={{ width: 75, height: 75, alignSelf: 'center' }}
                source={require('../images/trophy_1.png')}
              />
            </TouchableOpacity>
          </Col>
        </Row>
        <Row></Row>

        <Row>
          <Col>
            <TouchableOpacity
              onPress={() =>
                alert('Some information about how you earned this trophy')
              }>
              <Image
                style={{ width: 75, height: 75, alignSelf: 'center' }}
                source={require('../images/trophy_2.png')}
              />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity
              onPress={() =>
                alert('Some information about how you earned this trophy')
              }>
              <Image
                style={{ width: 75, height: 75, alignSelf: 'center' }}
                source={require('../images/trophy_1.png')}
              />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity
              onPress={() =>
                alert('Some information about how you earned this trophy')
              }>
              <Image
                style={{ width: 75, height: 75, alignSelf: 'center' }}
                source={require('../images/trophy_2.png')}
              />
            </TouchableOpacity>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <TouchableOpacity
              onPress={() =>
                alert('Some information about how you earned this trophy')
              }>
              <Image
                style={{ width: 75, height: 75, alignSelf: 'center' }}
                source={require('../images/trophy_1.png')}
              />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity
              onPress={() =>
                alert('Some information about how you earned this trophy')
              }>
              <Image
                style={{ width: 75, height: 75, alignSelf: 'center' }}
                source={require('../images/trophy_2.png')}
              />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity
              onPress={() =>
                alert('Some information about how you earned this trophy')
              }>
              <Image
                style={{ width: 75, height: 75, alignSelf: 'center' }}
                source={require('../images/trophy_1.png')}
              />
            </TouchableOpacity>
          </Col>
        </Row>
        <Row></Row>
      </Grid >
    );
  }
}