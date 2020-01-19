import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

export default (Sidebar = props => (
  <ScrollView>
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={{ height: 200, width: 280, paddingBottom: 16, paddingTop: 10, marginBottom:10 }}
    >
      <Image
        source={require('../assets/5065916-stockvader-predicted-adig-user-profile-icon-png-clipart-profile-icon-png-880_880.png')}
        style={styles.profilePic}
      />

      <View style={{backgroundColor:'white', height:40, marginTop:20, justifyContent:'center', alignItems:'center',}}>
        <Text style={styles.usernameText}>John Doe</Text>
      </View>

      <View style={{height:1, borderBottomColor:'#D3D3D4', borderBottomWidth:1, width:250, alignSelf:'center', paddingTop:0,}}>
      </View>
    </ImageBackground>

    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profilePic: {
    height: 130,
    width: 130,
    alignSelf: 'center',

  },

  usernameText: {
    color: '#1F77DF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    elevation:4,
  },
});
