import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import VerificationScreen from './phoneVeri/verificationScreen';
import PaymentScreen from './payment/paymentScreen';
import MapScreen from './map/mapScreen';

export const StackNavi = StackNavigator({
	PhoneVeri: { screen: VerificationScreen },
	Payment: { screen: PaymentScreen },
	MapScreen: { screen: MapScreen },
});