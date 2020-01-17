import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation-stack';

export default class StatisticsScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
             flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: StatusBar.currentHeight,
            padding:10,
            elevation:10,
            backgroundColor:'white',
            shadowColor:'black',
            shadowOffset:{height:5, width:5},
            shadowOpacity:0.8,
          }}
          onPress={this.props.navigation.openDrawer}>
          <FontAwesome5
            name="chevron-circle-left"
            size={30}
            color="black"
            onPress={props => {
              this.props.navigation.goBack();
            }}
          />
          <Text style={styles.headerofEachScreen}>Statistics</Text>

          <FontAwesome5
            name="bars"
            size={30}
            color="black"
            onPress={this.props.navigation.openDrawer}
            style={{ paddingLeft: 160 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerofEachScreen: {
    padding: 2.5,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
