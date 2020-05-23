/**
 * The bodyparts.js file handles everything related to choosing a main focus on the
 * Main Focus page.
 * 
 * Authors: Jaz, Sharan, Steven, Eric
 */

// External imports
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Picker } from '@react-native-community/picker';
import BackgroundColor from 'react-native-background-color';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

// Internal imports

// Components
import Button from '../components/button';

/**
 * Class that returns the Main Focus page with correct components and API calls.
 */
export default class MainFocusPage extends Component {

    // Call the super constructor and initalize state variables
	constructor(props) {
		super(props)
		this.state = {
			bodyparts: [],
			images: {},
			focus: "",
			focus_image: ""
		}
	}

	get_body_parts() {
		// Indicate which API to call and what data to pass in
		let url = 'http://10.0.2.2:4200/apis/bodyparts/get_body_parts';
		axios.post(url)
			// Success
			.then(response => {
                /* Set the state for this page to include the relevant user 
				information returned from the API call */
				let tmp_bodyparts = []
				let tmp_images = {}
				Object.keys(response.data).forEach((k) => {
					tmp_bodyparts.push(k)
					tmp_images[k] = response.data[k].image
				})
				this.setState({
					bodyparts: tmp_bodyparts,
					images: tmp_images,
					focus: tmp_bodyparts[0],
					focus_image: tmp_images[tmp_bodyparts[0]]
				})
			})
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

    // Route to the login page when Continue button is pressed
	goToSuggestedWorkouts() {
		Actions.suggestedworkouts({focus : this.state.focus, uid : this.props.uid});
	}

    // Route to the login page when Back button is pressed
	goBackProgress() {
		Actions.progress({ uid : this.props.uid });
	}

	// Displays the dropdown options
	dropdownOptions() {
		return this.state.bodyparts.map((bodypart) => {
			return <Picker.Item label={bodypart} value={bodypart} />
		})
	}

	// Updates the value of the dropdown based on what's selected
	updateDropdown(value) {
		this.setState({
			focus: value,
			focus_image: this.state.images[value]
		})

	}

	// Query database while rendering page for the body parts
	componentDidMount() {
		this.get_body_parts()
	}

	// Render the correct components for the Main Focus screen
	render() {
		return (

			<Grid style={{ backgroundColor: '#f3ebe1' }}>
				<Row>
					<Col>
						<View style={{ backgroundColor: '#f3ebe1' }}>
							<TouchableOpacity onPress={() => this.goBackProgress()}>
								<Image
									style={{ width: 75, height: 75 }}
									source={require('../images/back_button.png')}
								/>
							</TouchableOpacity>
						</View>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>
				<Row>
					<Col>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center',
							backgroundColor: '#f3ebe1'
						}}>
							<Text style={{
								fontSize: 30
							}}>
								Main Focus
							</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center',
							alignContent: 'center',
							flexWrap: 'wrap',
							marginVertical: 50
						}}>
							<Text style={{
								fontSize: 20
							}}>
								Select a Main Focus for your Workout:
							</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center',
							marginVertical: 0
						}}>
							<Picker
								selectedValue={this.state.focus}
								style={{ height: 50, width: 150 }}
								onValueChange={(itemValue, _) =>
									this.updateDropdown(itemValue)
								}
							>
								{this.dropdownOptions()}
							</Picker>
						</View>
					</Col>
				</Row>
				<Row>
					<Col></Col>
					<Col>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center',
							marginVertical: 0,
						}}>
							<Image
								style={{ width: 180, height: 180, alignSelf: 'center' }}
								source={{ uri: this.state.focus_image }}
							/>
						</View>
					</Col>
					<Col></Col>
				</Row>
			<Row></Row>
			<Row>
				<Col></Col>
				<Col>
					<View style={{
						flexDirection: 'row',
						alignSelf: 'center',
						marginVertical: 30,
					}}>
						<Button onPress={() => this.goToSuggestedWorkouts()}
							label="Continue"
						/>
					</View>
				</Col>
				<Col></Col>
			</Row>
			<Row></Row>
			</Grid >
		);

	}
}
