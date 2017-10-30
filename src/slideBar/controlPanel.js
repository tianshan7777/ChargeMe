import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
//TODO: import Icon from 'react-native-vector-icons/Ionicons'; 

const { height, width }  = Dimensions.get('window');

export default class ControlPanel extends Component {

	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.upperContainer}>
					<View style = {[styles.Container, { flexDirection: 'row', }]}>
						<Image source = {require('../images/user.png')}
								style = {{height: 50, width: 50, marginTop: 30,}}/>
								<View>
									<Text style = {styles.titleStyle}>+44 ****463583</Text>
									<Text style = {{ marginLeft: width/20 }}>Personal Code: 4921</Text>
								</View>
					</View>
					<View style = {[styles.Container, { flexDirection: 'row', }]}>
						<Text style = {{ fontSize: 15, marginTop: 30, marginLeft: 30, }}>Products</Text>
						<View style = {{ marginTop: 20, marginLeft: 30, }}>
							<Text style = { styles.upperText }>3h</Text>
							<Text style = { styles.lowerText }>21</Text>
						</View>
						<Image source = {require('../images/line.png')}
								style = {{height: 40, width: 40, marginLeft: 20, marginTop: 20}}/>
						<View style = {{ marginTop: 20, marginLeft: 30, }}>
							<Text style = { styles.upperText }>6h</Text>
							<Text style = { styles.lowerText }>14</Text>
						</View>
					</View>
				</View>
				<View style = {styles.lowerContainer}>
					<TouchableOpacity
						activeOpacity = {0.5}
						style = {styles.menuItem}
					    //onPress = {() => this.props.navigation.navigate('MapScreen')}
					    >
					    <Image source = {require('../images/credit.png')}
								style = {{height: 40, width: 40, marginLeft: 20,}}/>
						<Text style = {styles.itemText}>My Card</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity = {0.5}
						style = {styles.menuItem}
					    //onPress = {() => this.props.navigation.navigate('MapScreen')}
					    >
					    <Image source = {require('../images/coupon.png')}
								style = {{height: 40, width: 40, marginLeft: 20,}}/>
						<Text style = {styles.itemText}>My Coupons</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity = {0.5}
						style = {styles.menuItem}
					    //onPress = {() => this.props.navigation.navigate('MapScreen')}
					    >
					    <Image source = {require('../images/star.png')}
								style = {{height: 40, width: 40, marginLeft: 20,}}/>
						<Text style = {styles.itemText}>Special Editions</Text>
					</TouchableOpacity>
				</View>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//width: width*3/4,
		backgroundColor:'white',
		borderRadius: 20,
	},
	upperContainer: {
		flex: 1,
		backgroundColor:'#949997',
		height: height/3.5,
	},
	titleStyle: {
		fontFamily: 'arial',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: height/20,
		marginLeft: width/20,
	},
	upperText:{
		fontFamily: 'arial',
		fontSize: 15,
		fontWeight: 'bold',
	},
	lowerText: {
		fontFamily: 'arial',
		fontSize: 25,
		color: '#40e0d0',
		fontWeight: 'bold',
	},
	lowerContainer: {
		flex: 3,
		backgroundColor: '#d3d3d3',
		height: height*3/4,
	},
	menuItem: {
		marginTop: 20,
		flexDirection: 'row',
	},
	itemText: {
		fontFamily: 'arial',
		fontSize: 20,
		marginLeft: 10,
	},
});
