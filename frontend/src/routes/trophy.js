/**
 * The trophy case which contains all of the trophies for the current user.
 * 
 *     // When the sencre mounts
    // Get all the trophies for this user, where only the trophy id and (description) --> get all trophies for UID
    // for each trophy
    // pass trophy id into trophy component --> within the trophy component --> get trophy status for trophyID
    // description is what is in the alert when trophy is pressed
    // display correct image based on if earned or not

    // create a trophy component --> "" or "08/09/09"
    // create actual trophies in our db
    // create earned trophies for a user when the user is created
    // write get trophies from UID API call
    // write get trophy earned status from Trophy UID API call
 * Authors: Emily
 */

// External Imports
import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import axios from 'axios';


// Internal Imports
// Components
import Trophy_component from "../components/trophy"


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
        console.log("Printing state for response")
        console.log(this.state.response)
        console.log("Done")
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

  // Render the page
  render() {
    return (
      <Grid style={styles.container}>
        <Row>
          <Col>
            <View>
              <TouchableOpacity>
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require('../images/back_button.png')}
                />
              </TouchableOpacity>
            </View>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <View>
              <TouchableOpacity>
                <Image
                  style={{ width: 75, height: 75 }}
                  source={require('../images/profile_photo.png')}
                />
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Text style={styles.headerStyle}>Congratulations, Name!</Text>
        </Row>
        <Row>
          <Text style={styles.headerStyle}>Keep Working Out to</Text>
        </Row>
        <Row>
          <Text style={styles.headerStyle}>Collect More Trohpies!</Text>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <Trophy_component
              trophy_id={this.state.response[0]}
              date_earned={this.state.response[0]}
              Progress_to_req={this.state.response[0]}
              details={this.state.response[0]}
            />
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

const styles = {
  container: {
    backgroundColor: '#f3ebe1',
    marginTop: 0,
    alignItems: 'center',
  },
  progressbar: {
    marginTop: 13,
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#212143',
    borderRadius: 10,
    borderColor: '#fff',
  },
  buttonTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 0,
    color: '#fff',
  },
  headerStyle: {
    fontSize: 36,
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 0,
  },
  box: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
  },
  elementsContainer: {
    backgroundColor: '#ecf5fd',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
};
