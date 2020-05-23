/**
 * The workouts page allows the user to create a new workout, choose their body part,
 * choose their workout, time their workout, and complete their workout.
 * 
 * NOTE: This page needs to be refactored and commented by the authors. It might be 
 * a good idea to split these pages up because we route to them. Style also needs
 * to be put into a single stylesheet. Functions, classes, and methods must be commented.
 * 
 * Authors: ?
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

export default class MainFocusPage extends Component {

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
				let tmp_bodyparts = []
				let tmp_images = {}
				Object.keys(response.data).forEach((k) => {
					tmp_bodyparts.push(response.data[k].name)
					tmp_images[response.data[k].name] = response.data[k].image
				})
				this.setState({
					bodyparts: tmp_bodyparts,
					images: tmp_images,
					focus: tmp_bodyparts[0],
					focus_image: tmp_images[tmp_bodyparts[0]]
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

	goToSuggestedWorkouts() {
		Actions.suggestedworkouts({focus : this.state.focus, uid : this.props.uid});
	}

	goBackProgress() {
		Actions.progress();
	}
	dropdownOptions() {
		return this.state.bodyparts.map((bodypart) => {
			return <Picker.Item label={bodypart} value={bodypart} />
		})
	}
	updateDropdown(value) {
		this.setState({
			focus: value,
			focus_image: this.state.images[value]
		})

	}
	componentDidMount() {
		this.get_body_parts()
	}
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
