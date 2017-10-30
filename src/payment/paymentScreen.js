import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Button,
	StyleSheet,
	Dimensions,
} from 'react-native';
import CreditPay from './creditPay';
import PaypalPay from './paypalPay';

const { width, height } = Dimensions.get('window');

export default class PaymentScreen extends Component {

	static navigationOptions = {
		headerTitle: "Payment information",
	};

	constructor(){
		super();
		this.state = {
			screen: <CreditPay />
		}
	}

	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.nestedView}>
					<TouchableOpacity
				    	style = {styles.methodButton}
				    	onPress = {() => this.setState({ screen: <CreditPay />})}>
						<Text style = {{ color: 'black', }}>Credit Card</Text>
					</TouchableOpacity>
					<TouchableOpacity
				    	style = {styles.methodButton}
				    	onPress = {() => this.setState({ screen: <PaypalPay />})}>
						<Text style = {{ color: 'black', }}>Paypal</Text>
					</TouchableOpacity>
				</View>
				{this.state.screen}
				<TouchableOpacity
					activeOpacity = {0.5}
				    style = {styles.regisButton}
				    onPress = {() => this.props.navigation.navigate('MapScreen')}>
					<Text style = {{ color: 'white', }}>Register</Text>
				</TouchableOpacity>
				<Text style = {[styles.nestedView, { position: 'absolute', bottom: 100,}]}>
					By clicking start, you agree to the ||Charge-Me Term of Service||
				</Text>
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
	nestedView: {
		marginLeft: width/20,
		marginRight: width/20,
		marginTop: 10,
		flexDirection: 'row',
	},
	regisButton: {
		width:width-40,
    	height:35,
    	alignSelf:'center',
    	backgroundColor:'#949997',
    	marginBottom:50,
    	justifyContent:'center',
    	alignItems:'center',
    	position: 'absolute',
    	bottom: 100,
	},
	methodButton: {
		width:(width-40)/2,
    	height:35,
    	alignSelf:'center',
    	marginBottom:50,
    	justifyContent:'center',
    	alignItems:'center',
    	borderBottomWidth: 3,
    	borderBottomColor: 'black',
	},
});