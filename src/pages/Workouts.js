import React, { Component, useState } from 'react'
import {
	StyleSheet, Text, View, ScrollView, TouchableOpacity, Image
} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Picker } from '@react-native-community/picker';
import BackgroundColor from 'react-native-background-color';
import Button from '../components/Button';
import { db } from '../config';
import firebase from 'firebase';

var globalSelectedFocus = 'legs'

function readUserData(key) {
	let tmp = 0
	firebase.database().ref(key).on('value', function (snapshot) {
		// console.log(snapshot.val())
		tmp = snapshot.val()
	});
	return tmp
}

function MainFocusPage() {
	// let tmp = readUserData()
	// console.log("NOTICE: " + tmp)
	let tmp = readUserData('body_parts/')
	let keys = []
	for (let k in tmp) {
		keys.push(k)
	}

	const [selectedFocus, setSelectedFocus] = useState("Select a focus.");

	globalSelectedFocus = selectedFocus

	return (
		<Grid>
			<Row>
				<Col>
					<View>
						<TouchableOpacity>
							<Image
								style={{ width: 75, height: 75 }}
								source={require('../resources/backbutton.png')}
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
								source={require('../resources/profilepic.png')}
							/>
						</TouchableOpacity>
					</View>
				</Col>
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
						marginVertical: 0,
						alignItems: "center"
					}}>

							<Picker
								style={styles.picker}
								selectedFocus={selectedFocus}
								mode="dropdown"
								itemStyle={styles.itemStyle}
								onValueChange={(itemValue, itemIndex) => setSelectedFocus(itemValue)}>
							{
								keys.map((item) => {
									return (
										<Picker.Item label={item} value={item} key={item} />
									);
								})
							}
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
						<Button
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
	let tmp = readUserData('body_parts/' + globalSelectedFocus)
	let keys = []
	for (let k in tmp) {
		keys.push(k)
	}

	const [selectedWorkouts, setSelectedWorkouts] = useState("Select a Workout.");

	return (
		<Grid>
			<Row>
				<Col>
					<View>
						<TouchableOpacity>
							<Image
								style={{ width: 75, height: 75 }}
								source={require('../resources/backbutton.png')}
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
								source={require('../resources/profilepic.png')}
							/>
						</TouchableOpacity>
					</View>
				</Col>
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
								style={styles.picker}
								selectedValue={selectedWorkouts}
								mode="dropdown"
								itemStyle={styles.itemStyle}
								onValueChange={(itemValue, itemIndex) => setSelectedWorkouts(itemValue)}>
							{
								keys.map((item) => {
									return (
										<Picker.Item label={item} value={item} key={item} />
									);
								})
							}
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
						<Button
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center"
	},
	itemStyle: {
		fontSize: 15,
		height: 75,
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	picker: {
		width: 100
	},
});

export { MainFocus, SuggestedWorkouts }