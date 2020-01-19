import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
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
            <Text style={styles.headerofEachScreen}>My Profile</Text>


            <FontAwesome5
              name="bars"
              size={30}
              color="black"
              onPress={this.props.navigation.openDrawer}
              //style={{ paddingLeft: 158 }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={{height:Dimensions.get('window').height-80, bottom:0,}}>
        <View>
          <ImageBackground
            source={require('../assets/kisspng-abstract-art-illustration-vector-abstract-background-5a85733e1675a8.765382561518695230092.png')}
            style={styles.backgroundimg}
          />

          <View style={{ borderWidth: 2, borderColor: '#7FD2CA' }} />

          <View style={styles.profilepic} />

          <FontAwesome5
            name="edit"
            size={22}
            color="#7FD2CA"
            style={{ position: 'absolute', marginTop: 10, right: 10 }}
          />

          <Text style={styles.username}>Username</Text>
        </View>

        <View style={{marginTop:30}}>
          <View>

            <View>
              <Text style={styles.profileInfoTitle}>Name</Text>
            </View>
            <View style={styles.profileInfoContent}>
              <Text style={styles.profileInfoContentText}>John Doe</Text>
            </View>

            <View>
              <Text style={styles.profileInfoTitle}>E-Mail ID</Text>
            </View>
            <View style={styles.profileInfoContent}>
              <Text style={styles.profileInfoContentText}>
                johndoe123@gmail.com
              </Text>
            </View>

            <View>
              <Text style={styles.profileInfoTitle}>Mobile Number</Text>
            </View>
            <View style={styles.profileInfoContent}>
              <Text style={styles.profileInfoContentText}>982251387</Text>
            </View>

            <View>
              <Text style={styles.profileInfoTitle}>Department</Text>
            </View>
            <View style={styles.profileInfoContent}>
              <Text style={styles.profileInfoContentText}>
                Computer Science
              </Text>
            </View>

            <View>
              <Text style={styles.profileInfoTitle}>College</Text>
            </View>
            <View style={styles.profileInfoContent}>
              <Text style={styles.profileInfoContentText}>CollegeName</Text>
            </View>

            <View>
              <Text style={styles.profileInfoTitle}>University</Text>
            </View>
            <View style={styles.profileInfoContent}>
              <Text style={styles.profileInfoContentText}>
                Delhi Technical University
              </Text>
            </View>

            <View>
              <Text style={styles.profileInfoTitle}>
                Number of Complaints Posted
              </Text>
            </View>
            <View style={styles.profileInfoContent}>
              <Text style={styles.profileInfoContentText}>15</Text>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerofEachScreen: {
    padding: 3,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  backgroundimg: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 1.3,
    alignSelf: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    borderBottomColor: '#7FD2CA',
    borderBottomWidth: 2,
  },
  profilepic: {
    height: 170,
    width: 170,
    borderRadius: 90,
    position: 'absolute',
    alignSelf: 'center',
    top: Dimensions.get('window').height * 0.1,
    borderWidth: 3,
    borderColor: '#7FD2CA',
    backgroundColor: 'white',
  },
  username: {
    top: Dimensions.get('window').height * 0.05,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#434444',
    marginBottom:10,
  },
  scrollView: {
    // marginTop: Dimensions.get('window').height * 0.08,
    // marginHorizontal: 15,
    //marginBottom:15,
  },
  profileInfoTitle: {
    fontWeight: 'bold',
    color: '#2F9C86',
    fontSize: 15,
    paddingLeft: 15,
  },
  profileInfoContent: {
    height: 35,
    width: Dimensions.get('window').width - 30,
    borderColor: '#7FD2CA',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  profileInfoContentText: {
    color: '#BFC3C2',
    fontSize: 15,
    paddingLeft: 5,
    justifyContent: 'center',
  },
});

//  <Image
//         source={require('../assets/5065916-stockvader-predicted-adig-user-profile-icon-png-clipart-profile-icon-png-880_880.png')}
//         style={styles.profilepic} />
