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

export default class SuggestedWorkoutsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			focus : props.focus,
			workouts : [],
			selected_workout : ""
		}
	}

	get_workouts() {

		// Indicate which API to call and what data to pass in
		let url = 'http://10.0.2.2:4200/apis/workouts/get_workouts';
		// let data = {
		//     'uid': this.props.uid
		// };

		// Make API call
		// axios.post(url, data)
		axios.post(url)
			// Success
			.then(response => {
                /* Set the state for this page to include the relevant user 
				information returned from the API call */
				// console.log(response.data);
				let tmp_workouts = []
				console.log(this.state.focus)
				Object.keys(response.data).forEach((k) => {
					if (response.data[k].body_part_id === this.state.focus) {
						tmp_workouts.push(response.data[k].name)
					}
				})
				this.setState({
					workouts: tmp_workouts,
					selected_workout: tmp_workouts[0]
				})
				// console.log(this.state.bodyparts)

				// this.setState({
				// 	id : response.data.
				// })
				// })

				// Error
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
	
	goToTimer() {
		Actions.timer({focus : this.state.focus, workout : this.state.selected_workout, uid : this.props.uid})
	}

	goBack() {
		Actions.mainfocus({uid : this.props.uid})
	}
	dropdownOptions() {
		return this.state.workouts.map((workout) => {
			return <Picker.Item label={workout} value={workout} />
		})
	}
	updateDropdown(value) {
		this.setState({
			selected_workout: value
		})
		console.log(this.state.selected_workout)

	}
	componentDidMount() {
		this.get_workouts()
	}
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
					{/* <Col>
						<View>
							<TouchableOpacity>
								<Image
	// 								style={{ width: 75, height: 75 }}
	// 								source={require('../resources/profilepic.png')}
								/>
							</TouchableOpacity>
						</View>
					</Col> */}
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
							marginVertical: 50
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
							marginVertical: 0
						}}>
							<Picker
								selectedValue={this.state.selected_workout}
								style={{ height: 50, width: 100 }}
								onValueChange={(itemValue, _) =>
									this.updateDropdown(itemValue)
								}
							// onValueChange={(itemValue, itemIndex) =>
							// this.setState({ language: itemValue })
							// }>
							>
								{this.dropdownOptions()}
							</Picker>
						</View>
					</Col>
				</Row>
				<Row></Row>
				<Row></Row>
				<Row>
					<Col></Col>
					<Col>
						<View style={{
							flexDirection: 'row',
							alignSelf: 'center',
							marginVertical: 0,
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