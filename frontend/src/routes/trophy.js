import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
// import { ProgressBar, Colors } from "react-native-paper";
// import HideableView from 'react-native-hideable-view';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class Trophy extends Component {
  // Call the super constructor and initalize a state variable
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // When the sencre mounts
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

    console.log('Printing UID in Trophy.js');
    console.log(this.props.uid);
  }

  render() {
    return (
      <Grid style={styles.container}>
        <Row>
          <Col>
            <View>
              <TouchableOpacity>
                <Image
                  style={{width: 75, height: 75}}
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
                  style={{width: 75, height: 75}}
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
            <Trophy
              trophy_id="trophy_1"
              date_earned="090909"
              Progress_to_req="almost"
              details="50 squats"
            />
          </Col>
          <Col>
          <Trophy
              trophy_id="trophy_2"
              date_earned="090909"
              Progress_to_req="test"
              details="pull-ups"
            />
          </Col>
          <Col>
            <TouchableOpacity
              onPress={() =>
                alert('Some information about how you earned this trophy')
              }>
              <Image
                style={{width: 75, height: 75, alignSelf: 'center'}}
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
                style={{width: 75, height: 75, alignSelf: 'center'}}
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
                style={{width: 75, height: 75, alignSelf: 'center'}}
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
                style={{width: 75, height: 75, alignSelf: 'center'}}
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
                style={{width: 75, height: 75, alignSelf: 'center'}}
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
                style={{width: 75, height: 75, alignSelf: 'center'}}
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
                style={{width: 75, height: 75, alignSelf: 'center'}}
                source={require('../images/trophy_1.png')}
              />
            </TouchableOpacity>
          </Col>
        </Row>
        <Row></Row>
      </Grid>
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
