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
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

// Internal imports
// Components
import Button from '../components/button';
import LoadingScreen from "../components/loading"

// Stylesheet
import styles from '../style/r_bodyparts';

// Images
import backButton from '../images/back_button.png';

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
			focus_image: "",
			isLoading: true
		}
	}

	get_body_parts() {
		// Indicate which API to call and what data to pass in
		let url = 'http://10.0.2.2:4200/apis/bodyparts/get_body_parts';
		axios.post(url)
			// Success
			.then(response => {

				let body_parts = []
				let images = []
				for (var body_part_id in response.data) {
					body_parts.push(response.data[body_part_id].body_part_name)
					images[response.data[body_part_id].body_part_name] = response.data[body_part_id].image
				}

				this.setState({
					bodyparts: body_parts,
					images: images,
					focus: body_parts[0],
					focus_image: images[body_parts[0]],
					isLoading: false
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
	goToSuggestedWorkouts = () => {
		Actions.suggestedworkouts({ focus: this.state.focus, uid: this.props.uid });
	}

	// Route to the login page when Back button is pressed
	goBackProgress = () => {
		Actions.progress({ uid: this.props.uid });
	}

	// Displays the dropdown options
	dropdownOptions = () => {
		return this.state.bodyparts.map((bodypart) => {
			return <Picker.Item label={bodypart} value={bodypart} />
		})
	}

	// Updates the value of the dropdown based on what's selected
	updateDropdown = (value) => {
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
		// If the API call is not complete, display the loading screen
		if (this.state.isLoading) {
			return (
				<LoadingScreen></LoadingScreen>
			)
		}

		return (
			<Grid style={styles.gridStyle}>
				<Row>
					<Col>
						<View style={styles.backButtonView}>
							<TouchableOpacity onPress={() => this.goBackProgress()}>
								<Image source={backButton} style={styles.topButton} />
							</TouchableOpacity>
						</View>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>
				<Row>
					<Col>
						<View style={styles.mainFocusView}>
							<Text style={styles.mainFocusViewText}>
								Main Focus
							</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={styles.selectMainFocusViewText}>
							<Text style={styles.selectMainFocusViewText}>
								Select a Main Focus for your Workout:
							</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={styles.pickerView}>
							<Picker
								selectedValue={this.state.focus}
								style={styles.picker}
								onValueChange={(itemValue, itemIndex) =>
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
						<View style={styles.focusImageView}>
							<Image
								style={styles.focusImage}
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
						<View style={styles.buttonStyle}>
							<TouchableOpacity onPress={this.goToSuggestedWorkouts}>
								<Text style={styles.buttonTextStyle}>
									Continue
                            	</Text>
							</TouchableOpacity>
						</View>
					</Col>
					<Col></Col>
				</Row>
				<Row></Row>
			</Grid >
		);

	}
}
