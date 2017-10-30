import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import { StackNavigator } from 'react-navigation'


const { width, height } = Dimensions.get('window');

const month = [{
	value: '1',
},{
	value: '2',
},{
	value: '3',
},];

const year = [{
	value: '2018',
},{
	value: '2019',
},];

export default class CreditPay extends Component {

	render(){
		return(
			<View style = {styles.container}>
				<TextInput
					placeholder = "Enter Card Holder Name"
					placeholderTextColor = '#798182'
				    secureTextEntry
				    keyboardType = "email-address"
				    returnKeyType = "next"
				    style = {[styles.holderInput,{ marginTop: 30, width: width-40,},]}
				    >
				</TextInput>
				<TextInput
					placeholder = "Enter Card Number"
					placeholderTextColor = '#798182'
				    secureTextEntry
				    keyboardType = "email-address"
				    returnKeyType = "next"
				    style = {[styles.holderInput,{ marginTop: 20, width: width-40,},]}
				    >
				</TextInput>
				<View style = {{flexDirection: 'row'}}>
					<Dropdown data = {month} containerStyle = {{ width: 50, }}/>
					<Dropdown data = {year} containerStyle = {{ width: 100, }}/>
					<TextInput
						placeholder = "CVV"
						placeholderTextColor = '#798182'
				    	secureTextEntry
				    	keyboardType = "numeric"
				    	returnKeyType = "next"
				    	style = {[styles.holderInput,{ marginTop: 20, marginLeft: 10, width: width/2-10,},]}
				    >
					</TextInput>
					<TouchableOpacity>
						<Image/>
					</TouchableOpacity>
				</View>
			</View>
			);
	}
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	justifyContent: 'flex-start',
    	alignItems: 'flex-start',
    	backgroundColor: '#f5f5f5',
    	marginLeft: width/20,
	},
	holderInput: {
		height: 35,
		color: '#c0c0c0',
		backgroundColor: '#d3d3d3',
	},
});
