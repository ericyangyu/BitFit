import React, { Component } from 'react'
import {
	StyleSheet, Text, View, ScrollView, TouchableOpacity, Image
} from 'react-native'
// import { Dropdown } from 'react-native-material-dropdown';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Picker } from '@react-native-community/picker';
import BackgroundColor from 'react-native-background-color';
import Button from '../components/Button';
import { throwStatement } from '@babel/types';
import { Actions } from 'react-native-router-flux';

function MainFocusPage() {
	const goToSuggestedWorkouts = () => {
		Actions.suggestedworkouts()
	}
	const goBackProgress = () => {
		Actions.progress()
	}
	return (
		<Grid style={{ backgroundColor: '#f3ebe1' }}>
			<Row>
				<Col>
					<View style={{ backgroundColor: '#f3ebe1' }}>
						<TouchableOpacity onPress={() => goBackProgress()}>
							<Image
								style={{ width: 75, height: 75 }}
								source={require('../resources/backbutton.png')}
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
								style={{ width: 75, height: 75 }}
								source={require('../resources/profilepic.png')}
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
							selectedValue={'java'}
							style={{ height: 50, width: 100 }}
						// onValueChange={(itemValue, itemIndex) =>
						// this.setState({ language: itemValue })
						// }>
						>
							<Picker.Item label="Option 1" value="java" />
							<Picker.Item label="Option 2" value="js" />
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
						<Button onPress={() => goToSuggestedWorkouts()}
							label="Continue"
						/>
					</View>
				</Col>
				<Col></Col>
			</Row>
			<Row></Row>
		</Grid>
	);
}

function SuggestedWorkoutsPage() {
	const goToTimer = () => {
		Actions.timer()
	}
	const goBack = () => {
		Actions.mainfocus()
	}
	return (
		<Grid style={{ backgroundColor: '#f3ebe1' }}>
			<Row>
				<Col>
					<View style={{ backgroundColor: '#f3ebe1' }}>
						<TouchableOpacity onPress={() => goBack()}>
							<Image
								style={{ width: 75, height: 75 }}
								source={require('../resources/backbutton.png')}
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
								style={{ width: 75, height: 75 }}
								source={require('../resources/profilepic.png')}
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
							selectedValue={'java'}
							style={{ height: 50, width: 100 }}
						// onValueChange={(itemValue, itemIndex) =>
						// this.setState({ language: itemValue })
						// }>
						>
							<Picker.Item label="Option 1" value="java" />
							<Picker.Item label="Option 2" value="js" />
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
						<Button onPress={() => goToTimer()}
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


class MainFocus extends Component {
	componentDidMount() {
		BackgroundColor.setColor('#EDE0D3');
	}

	render() {
		return (
			<MainFocusPage />
		)
	}
}

class SuggestedWorkouts extends Component {
	componentDidMount() {
		BackgroundColor.setColor('#EDE0D3');
	}

	render() {
		return (
			<SuggestedWorkoutsPage />
		)
	}
}

export { MainFocus, SuggestedWorkouts }