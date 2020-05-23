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
 * Class that returns the Workouts page with correct components and API calls.
 */
export default class SuggestedWorkoutsPage extends Component {
	
	// Call the super constructor and initalize a state variable
	constructor(props) {
		super(props)
		this.state = {
			focus : props.focus,
			workouts : [],
			image_desc : {}, 
			selected_workout : "",
			image : "",
			description : ""
		}
	}

	// Route to the timer page after selecting workout
	goToTimer() {
		Actions.timer({
			focus : this.state.focus, 
			workout : this.state.selected_workout, 
			uid : this.props.uid})
	}

	// Route to the Focus page if user wishes
	goBack() {
		Actions.mainfocus({uid : this.props.uid})
	}

	// Displays Dropdown options
	dropdownOptions() {
		return this.state.workouts.map((workout) => {
			return <Picker.Item label={workout} value={workout} />
		})
	}

	// Updates the selcted value from the user when selecting a workout
	updateDropdown(value) {
		this.setState({
			selected_workout: value,
			image: this.state.image_desc[value]["image"],
			description: this.state.image_desc[value]["description"]
		})
	}

	// Call the API when component mounts
	componentDidMount() {
		this.getWorkouts()
	}

	// API call to get workouts from the backend
	getWorkouts() {

		// Indicate which API to call and what data to pass in
		let url = 'http://10.0.2.2:4200/apis/workouts/get_workouts';
		
		// make API call
		axios.post(url)
			// Success
			.then(response => {


				// set the image descriptions, and workouts
				let tmp_workouts = []
				let tmp_image_desc = {}

				Object.keys(response.data).forEach((k) => {
					if (response.data[k].body_part_id === this.state.focus) {
						tmp_workouts.push(k)
						tmp_image_desc[k] = {
							image: response.data[k].image, 
							description: response.data[k].description
						}
					}
				})
				// setting state after parsing data
				this.setState({
					workouts: tmp_workouts,
					image_desc: tmp_image_desc,
					selected_workout: tmp_workouts[0],
					image: tmp_image_desc[tmp_workouts[0]]["image"],
					description: tmp_image_desc[tmp_workouts[0]]["description"]
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
	
	 // Render the correct components for the Workout screen
	render() {
		return (
			<Grid style={{ backgroundColor: '#f3ebe1' }}>
				<Row>
					<Col>
						<View style={{ backgroundColor: '#f3ebe1' }}>
							<TouchableOpacity onPress={() => this.goBack()}>
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
						}}>
							<Text style={{
								fontSize: 30
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
							marginVertical: 10
						}}>
							<Text style={{
								fontSize: 20
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
							marginVertical: -40
						}}>
							<Picker
								selectedValue={this.state.selected_workout}
								style={{ height: 50, width: 100 }}
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
							marginVertical: -50,
						}}>
							<Image
								style={{ width: 150, height: 150, alignSelf: 'center' }}
								source={{ uri: this.state.image }}
							/>
						</View>
					</Col>
					<Col></Col>

				</Row>
				<Row>
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
								{this.state.description}
							</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col></Col>
					<Col>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center',
							marginVertical: 40,
						}}>
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