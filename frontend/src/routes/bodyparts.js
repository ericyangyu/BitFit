/**
 * The bodyparts.js file handles everything related to choosing a main focus on the
 * Main Focus page.
 * 
 * Authors: Jaz, Sharan, Steven, Eric
 */

// External imports
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Icon, Picker } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
// import { Picker } from '@react-native-community/picker';
import { Actions } from 'react-native-router-flux';

// Internal imports
import api from '../config'

// Components
import LoadingScreen from "../components/loading"
import Button from '../components/button';
import blue from '../images/background.jpg';

// Stylesheet
import styles from '../style/r_bodyparts';

// Images
import backButton from '../images/back_button.png';
import { abs_photo } from '../images/abs';
import { arms_photo } from '../images/arms';

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
			localImages: { "Core": abs_photo, "Arms": arms_photo },
			focus: "",
			focus_image: "",
			isLoading: true
		}
	}

	get_body_parts = () => {
		// Indicate which API to call and what data to pass in
		let url = 'bodyparts/get_body_parts';
		api.post(url)
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
					// focus_image: images[body_parts[0]],
					focus_image: this.state.localImages[body_parts[0]],
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
		Actions.pop();
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
			focus_image: this.state.localImages[value]
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
		} else return (
			<Grid style={{ backgroundColor: '#e7e7e7' }}>

				<View>
					<Image
						style={{ width: window.width, height: 200, opacity: 1.8 }}
						source={blue}
					/>
					<View>
						<TouchableOpacity
							style={{ paddingLeft: "1%", marginTop: "-41%", marginLeft: 10 }}
							onPress={() => this.goBackProgress()}>
							<Image
								style={{ width: 45, height: 45 }}
								source={require('../images/back_button.png')}
							/>
						</TouchableOpacity>
					</View>
					<Text style={{
						fontSize: 50,
						color: 'white',
						textAlign: 'center',
						fontWeight: '100',
						marginTop: "-25%"
					}}> Main Focus </Text>
				</View>
				{/* <Row></Row> */}
				{/* <View style={{ backgroundColor: '#e7e7e7', marginTop: 20, marginLeft: 20 }}>
							<TouchableOpacity onPress={() => this.goBackProgress()}>
								<Image
									style={{ width: 45, height: 45 }}
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
							backgroundColor: '#e7e7e7'
						}}>
							<Text style={{
								fontSize: 30,
								// fontFamily: 'sans-serif-condensed'
							}}>
								Main Focus
							</Text>
						</View> */}
				{/* </Col>
				</Row> */}
				{/* <Row>
					<View elevation={5} style={{
						backgroundColor: 'white',
						width: 380,
						paddingTop: 50,
						paddingBottom: 295,
						marginVertical: 10,
						marginTop: 80,
						marginBottom: 80,
						marginHorizontal: 15,
						borderRadius: 20
					}}>
						<Row>
							<Col>
								<View style={{
									flexDirection: 'row',
									alignSelf: 'center',
									alignContent: 'center',
									flexWrap: 'wrap',
									marginVertical: 100
								}}>
									<Text style={{
										fontSize: 20,
										// fontFamily: 'monospace',
										textAlign: 'center'
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
									marginVertical: 50
								}}>
									<Picker
										selectedValue={this.state.focus}
										style={{ backgroundColor: '#e7e7e7', height: 50, width: 200, marginTop: 20 }}
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
									marginVertical: 220,
								}}>
									<Image
										style={styles.focusImage}
										source={{ uri: this.state.focus_image }}
									/>
								</View>
							</Col>
							<Col></Col>
						</Row>
					</View>
				</Row>
				<Row></Row>
				<Row>
					<Col></Col>
					<Col>
						<View style={styles.buttonView}>
							<Button style={styles.buttonStyle} onPress={() => this.goToSuggestedWorkouts()}
								label="Continue"
							/>
						</View>
					</Col>
					<Col></Col>
				</Row> */}
				<Row>
					<View style={styles.whiteBox2}>
						<Text style={{
							fontSize: 20,
							textAlign: 'center'
						}}>
							Select a Main Focus for your Workout:
							</Text>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center'
						}}>
							<Picker
								selectedValue={this.state.focus}
								style={{ backgroundColor: '#FFFFFF', height: 50, width: 200, marginTop: 0 }}
								onValueChange={(itemValue, _) =>
									this.updateDropdown(itemValue)
								}
							>
								{this.dropdownOptions()}
							</Picker>
						</View>
					</View>

				</Row>

				<View style={{
					flexDirection: 'row',
					alignSelf: 'center',
					marginVertical: "30%",
				}}>
					<Image
						style={styles.focusImage}
						source={{ uri: `data:image/gif;base64,${this.state.focus_image}` }}
					/>
				</View>

				<View style={styles.buttonView}>
					<Button style={styles.buttonStyle} onPress={() => this.goToSuggestedWorkouts()}
						label="Continue"
					/>
				</View>

			</Grid >

		);
	}
}
