import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	Picker,
	StyleSheet,
	Dimensions
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';

const { width, height } = Dimensions.get('window');

export default class PaypalPay extends Component {

	render(){
		return(
			<View style = {styles.container}>
				<Image 
					style={{width: 100, height: 50}}
					source = {require('../images/paypalLogo.png')}
					alignSelg = 'center'/>
				<Text style = {styles. titleStyle}>Login</Text>
				<TextInput
					placeholder = "Username or Email"
					placeholderTextColor = '#798182'
				    secureTextEntry
				    keyboardType = "email-address"
				    returnKeyType = "next"
				    style = {styles.holderInput}
				    >
				</TextInput>
				<TextInput
					placeholder = "Password"
					placeholderTextColor = '#798182'
				    secureTextEntry
				    keyboardType = "email-address"
				    returnKeyType = "next"
				    style = {styles.holderInput}
				    >
				</TextInput>
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
	titleStyle: {
		fontFamily: 'arial',
		fontSize: 20,
		fontWeight: 'bold',
		color: '#798182',
		marginTop: height/20,
		marginLeft: width/20,
	},
	holderInput: {
		width: width-40,
		height: 35,
		color: '#c0c0c0',
		backgroundColor: '#d3d3d3',
		marginTop: 20,
	},
});
