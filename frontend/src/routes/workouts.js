/**
 * The workouts page that allows the user to select a workout from the focus page.
 * 
 * Description: We have a Workout class that takes workouts from the backend and
 * displays them on the application. 
 * 
 * Authors: Sharan, Eric, Jaz, Steven
 */


// External imports
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Picker } from 'react-native'
// import { Picker } from '@react-native-community/picker';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

// Internal imports
import api from '../config'

// Stylesheet
import styles from '../style/r_workouts';

// Components
import LoadingScreen from "../components/loading"
import Button from '../components/button';

// Images
import backButton from '../images/back_button.png';
import blue from '../images/background.jpg'
import { russian_twists_photo } from '../images/russian_twists'

/**
 * Class that returns the Workouts page with correct components and API calls.
 */
export default class SuggestedWorkoutsPage extends Component {

	// Call the super constructor and initalize a state variable
	constructor(props) {
		super(props)
		this.state = {
			focus: this.props.focus,
			workouts: [],
			workouts_info: {},
			selected_workout: "",
			selected_workout_image: "",
			selected_workout_description: "",
			isLoading: true
		}
	}

	// Route to the timer page after selecting workout
	goToTimer = () => {
		Actions.timer({
			focus: this.state.focus,
			workout: this.state.selected_workout,
			uid: this.props.uid
		})
	}

	// Route to the Focus page if user wishes
	goBack = () => {
		Actions.pop()
	}

	// Displays Dropdown options
	dropdownOptions = () => {
		return this.state.workouts.map((workout) => {
			return <Picker.Item label={workout} value={workout} />
		})
	}

	// Updates the selcted value from the user when selecting a workout
	updateDropdown = (value) => {
		this.setState({
			selected_workout: value,
			selected_workout_image: this.state.workouts_info[value].image,
			selected_workout_description: this.state.workouts_info[value].description,
		})
	}

	// Call the API when component mounts
	componentDidMount = () => {
		this.getWorkouts()
	}

	// API call to get workouts from the backend
	getWorkouts = () => {

		// Indicate which API to call and what data to pass in
		let url = 'workouts/get_workouts';
		let info = {
			'body_part_name': this.props.focus
		};

		// make API call
		api.post(url, info)
			// Success
			.then(response => {
				let workouts = []
				let workouts_info = {}
				for (var workout_id in response.data) {
					let workout_name = response.data[workout_id].workout_name
					workouts.push(workout_name)
					workouts_info[workout_name] = { "image": response.data[workout_id].image, "description": response.data[workout_id].description }
				}

				// setting state after parsing data
				this.setState({
					workouts: workouts,
					workouts_info: workouts_info,
					selected_workout: workouts[0],
					selected_workout_image: workouts_info[workouts[0]].image,
					selected_workout_description: workouts_info[workouts[0]].description,
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

	// Render the correct components for the Progress screen
	render() {
		// If the API call is not complete, display the loading screen
		if (this.state.isLoading) {
			return (
				<LoadingScreen></LoadingScreen>
			)
		}

		return (
			<Grid style={{ backgroundColor: '#e7e7e7' }}>
				<Row>
					<Col>
						<Image
							style={{ width: "300%", height: 200, opacity: 1.8, position: 'absolute' }}
							source={blue}
						/>
						<View style={{ marginTop: "30%", marginLeft: "15%" }}>
							<TouchableOpacity onPress={() => this.goBack()}>
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
						}}>
							<Text style={{
								fontSize: 35,
								color: 'white',
								textAlign: 'center',
								fontWeight: '100',
							}}>
								Suggested Workouts
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
							marginTop: "5%",
							marginVertical: 10,
							backgroundColor: 'white',
							width: "90%",
							height: "230%",
							paddingTop: 20,
							padding: 20,
							paddingLeft: "17%",
							marginVertical: "10%",
							marginHorizontal: 5,
							borderRadius: 20
						}}>
							<Text style={{
								fontSize: 25,
								textAlign: 'center',
								fontWeight: '100',
								marginBottom: 0
							}}>
								Select Your Workout:
							</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center',
							marginVertical: "-15%"
						}}>
							<Picker
								selectedValue={this.state.selected_workout}
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
							marginVertical: "50%"
						}}>
							<Image
								style={{ width: 150, height: 150, alignSelf: 'center' }}
								source={{ uri: `data:image/gif;base64,${russian_twists_photo}` }}
							/>
						</View>
					</Col>
					<Col></Col>

				</Row>
				{/* <Row>
					<Col>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center'
						}}>
							<Text style={{
								fontSize: 20,
								marginVertical: 40,
								textAlign: 'center'
							}}>
								{this.state.selected_workout_description}
							</Text>
						</View>
					</Col>
				</Row> */}
				<Row>
					<Col></Col>
					<Col>
						<View style={styles.buttonStyle}>
							<Button onPress={() => this.goToTimer()}
								label="Begin Workout"
							/>
						</View>
					</Col>
					<Col></Col>
				</Row>
				<Row></Row>
			</Grid>
		);
	}
}