import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RNChipView } from 'react-native-chip-view';

export default class CustomCard extends React.Component {
  cardSize = new Animated.Value(1);
  mode = new Animated.Value(0);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.cardSize, {
        toValue: 0.98,
        duration: 100,
      }),

      Animated.timing(this.cardSize, {
        toValue: 1,
        duration: 150,
      }),

      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
        duration: 150,
      }),
    ]).start();
  };

  render() {
    const sizeStyle = {
      transform: [{ scale: this.cardSize }],
    };

    return (
      <Animated.View style={[styles.cardContainer, sizeStyle]}>
      <TouchableHighlight underlayColor="white" onPress={this.handlePress}>
        <Animated.View >
          <View style={styles.upperContainer}>
            <View style={styles.title}>
              <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
                Title Example
              </Text>
            </View>

            <View style={styles.categories}>
              <View style={{margin:1.5}}>
                <RNChipView
                  title={'Category'}
                  avatar={<FontAwesome5 name='graduation-cap' size={13} color='white' />}
                  avatarStyle={{alignItems:'flex-end', justifyContent:'center',  margin:2}}
                  titleStyle={{ fontSize: 12, color: 'white', justifyContent:'center', alignItems:'flex-start' }}
                  backgroundColor="#2AB6AE"
                  height={22}
                  borderRadius={11}
                />
              </View>

              <View style={{margin:1.5}}>
              <RNChipView
                title={'Subcategory'}
                avatar={<FontAwesome5 name='th' size={13} color='white' />}
                avatarStyle={{alignItems:'flex-end', justifyContent:'center',  margin:2}}
                titleStyle={{ fontSize: 12, color: 'white', justifyContent:'center', alignItems:'flex-start' }}
                backgroundColor="#D69935"
                height={22}
                borderRadius={11}
              />
              </View>
            </View>
          </View>

          <View style={styles.middleContainer}>
            <Text style={styles.info} numberOfLines={3} ellipsizeMode="tail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.profileOfComplaintant}>
              <View style={styles.profileOfComplaintantPic}>
                <FontAwesome5 name="user" size={15} color="gray" />
              </View>
              <View style={styles.profileOfComplaintantName}>
                <Text style={styles.profileOfComplaintantNameText}>
                  Username
                </Text>
              </View>
            </View>

            <View style={styles.upvoteButtom}>
              <FontAwesome5
                name="arrow-circle-up"
                size={40}
                color="#249736"
                style={styles.upvoteButtomArrow}
              />
            </View>
          </View>
        </Animated.View>
      </TouchableHighlight>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    margin: 7,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    elevation: 10,
    height: 189,
    width: Dimensions.get('window').width - 14,
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    zIndex: 0,
    paddingHorizontal: 5,
  },
  upperContainer: {
    width: Dimensions.get('window').width - 17,
    height: 65,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    margin: 1.5,
    flex: 1,
  },
  middleContainer: {
    width: Dimensions.get('window').width - 17,
    height: 70,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 1.5,
    justifyContent: 'center',
    padding: 5,
  },
  bottomContainer: {
    width: Dimensions.get('window').width - 17,
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 1.5,
    justifyContent: 'space-between',
  },
  title: {
    backgroundColor: 'white',
    height: 35,
    flex: 6.5,
    width: Dimensions.get('window').width - 19,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
  },
  categories: {
    backgroundColor: 'white',
    height: 22,
    flex: 3.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 2,
    // width:Dimensions.get('window').width-14,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#434444',
    //numberOfLines:3,
  },
  categoryLabel: {
    width: Dimensions.get('window').width * 0.3,
    backgroundColor: '#2AB6AE',
    height: 20,
    marginHorizontal: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabelText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  info: {
    color: 'gray',
    fontSize: 12,
  },
  profileOfComplaintant: {
    width: Dimensions.get('window').width * 0.5,
    height: 42,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
  },
  profileOfComplaintantPic: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileOfComplaintantName: {
    padding: 2,
    margin: 2,
  },
  profileOfComplaintantNameText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F4798F',
  },
  // numberOfUpvotes:{
  //   flexDirection:'row',
  //   alignItems:'center',
  //   justifyContent:'center',
  //   padding:5,
  //   margin:1.5,
  // },
  // numberOfUpvotesText:{
  //   fontSize:17,
  //   fontWeight:'bold',
  //   color:'gray',
  //   margin:3
  // },
  upvoteButtom: {
    margin: 1.5,
    paddingBottom: 6,
    paddingHorizontal: 6,
    elevation: 50,
  },
  upvoteButtomArrow: {
    elevation: 50,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
  },
});

// <View style={styles.numberOfUpvotes}>
// <FontAwesome5 name='arrow-up' size={17} color='red'/>
// <Text style={styles.numberOfUpvotesText}>: 10</Text>
// </View>

// <View style={styles.categoryLabel}>
//     <Text style={styles.categoryLabelText}>Category</Text>
//   </View>
//   <View style={styles.categoryLabel}>
//     <Text style={styles.categoryLabelText}>SubCategory</Text>
