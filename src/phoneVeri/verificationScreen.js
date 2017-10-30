import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const items = [{
	value: '+44',
},{
	value: '+86',
},{
	value: '+852',
},];

//Login Button for facebook
//import { LoginButton, LoginManager } from 'react-native-fbsdk';

const { width, height } = Dimensions.get('window');

export default class VerificatonScreen extends Component {

	constructor(dialCode, teleNumber, code){
		super();
		dialCode = dialCode;
		teleNumber = teleNumber;
		code = code;
	}

	//handleChange = (event, index, value) => {};

	render(){
		return(
			<View style = {styles.container}>
				<Text style = {styles.titleStyle}>Phone Verification</Text>
				<Text style = {styles.textStyle}>Enter yourphone number,</Text>
				<Text style = {styles.textStyle}>then login or register your Charge-Me account</Text>
				<View style = {styles.nestedView}>
				    <Dropdown
				    	baseColor = '#798182'
        				data = {items}
        				containerStyle = {{ width: 100,}}
      				/>
				    <TextInput 
				    	placeholder = "Enter mobile number"
				    	placeholderTextColor = '#798182'
				    	keyboardType = "numeric"
				    	returnKeyType="go"
				    	//ref = {(input)=>this.state.teleNumber = input}
				    	style = {styles.inputOne}>
					</TextInput>
				</View>
				<View style={styles.nestedView}>
					<Text style = {{backgroundColor: '#d3d3d3', width: 70, height: 35, justifyContent:'center',}}>
						Code
					</Text>
					<TextInput
					    placeholder = "Enter code"
				    	placeholderTextColor = '#798182'
				    	secureTextEntry
				    	keyboardType = "numeric"
				    	returnKeyType="go"
				    	//ref = {(input)=>this.state.code = input}
				    	style = {styles.inputTwo}>
				    	</TextInput>
					<TouchableOpacity 
					    activeOpacity = {0.5}
					    style = {styles.sendButton}>
					    <Text style = {{color: 'white', }}>Send Code</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity 
				    activeOpacity = {0.5}
				    style = {styles.startButton}
				    onPress = {() => this.props.navigation.navigate('Payment')}>
					<Text style = {styles.buttonText}>Start</Text>
				</TouchableOpacity>
				<Text style = {styles.nestedView}>By clicking start, you agree to the ||Charge-Me Term of Service||</Text>
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
	},
	titleStyle: {
		fontFamily: 'arial',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: height/20,
		marginLeft: width/20,
	},
	textStyle: {
		fontFamily: 'arial',
		fontSize: 10,
		marginLeft: width/20,
	},
	nestedView: {
		marginLeft: width/20,
		marginRight: width/20,
		marginTop: 10,
		flexDirection: 'row',
	},
	inputOne: {
		width: width-140,
		height:35,
		color: '#c0c0c0',
		backgroundColor: '#d3d3d3',
		marginLeft: 10,
		marginTop: 30,
	},
	inputTwo: {
		width: width-190,
		height:35,
		color: '#c0c0c0',
		backgroundColor: '#d3d3d3',
	},
	buttonText: {
		color: 'white',
	},
	sendButton: {
		width: 80,
		height: 35,
		marginLeft: 5,
		backgroundColor: '#949997',
		alignItems:'center',
		justifyContent:'center',
	},
	startButton: {
		width:width-40,
    	height:35,
    	alignSelf:'center',
    	backgroundColor:'#949997',
    	marginTop:20,
    	justifyContent:'center',
    	alignItems:'center',
	},
});