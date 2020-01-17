import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity , ScrollView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import CustomCard from './customCard';

export default class MyPostsScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{ flexDirection: 'row',
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
          <Text style={styles.headerofEachScreen}>My Posts</Text>

          <FontAwesome5
            name="bars"
            size={30}
            color="black"
            onPress={this.props.navigation.openDrawer}

          />
        </TouchableOpacity>

<ScrollView style={{marginBottom:100,}}>
        <CustomCard/>
          <CustomCard/>
            <CustomCard/>
              <CustomCard/>
                <CustomCard/>
                  <CustomCard/>
                  </ScrollView>
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
