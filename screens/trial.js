import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';
import {StatusBar} from 'react-native';

export default class Trial extends React.Component{
  render() {
    return (
      <View>

        <TouchableOpacity style={{alignItems:'flex-start', marginTop: StatusBar.currentHeight + 5,  margin:10, }} onPress={this.props.navigation.openDrawer}>
          <FontAwesome5 name='chevron-circle-left' size={30} color='black' onPress ={(props) => {this.props.navigation.goBack()}}/>
        </TouchableOpacity>

        <Text>Trial Screen</Text>

      </View>
    )
  }
}

// "icon": "./assets/icon.png",
// "splash": {
//   "image": "./assets/splash.png",
//   "resizeMode": "contain",
//   "backgroundColor": "#ffffff"
