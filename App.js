import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import VerificationScreen from './src/phoneVeri/verificationScreen';
import { StackNavi } from './src/router';

export default class App extends Component {
  render(){
    return(
      <View style={{ flex: 1 }}>
        <StackNavi />
      </View>
      );
  }
}