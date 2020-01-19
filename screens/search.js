import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { RNChipView } from 'react-native-chip-view';
import CustomCard from './customCard';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View>
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
              name="chevron-left"
              size={30}
              color="#434444"
              onPress={props => {
                this.props.navigation.goBack();
              }}
            />
            <Text style={styles.headerofEachScreen}>Search</Text>

            <FontAwesome5
              name="ellipsis-v"
              size={32}
              color="#434444"
              onPress={this.props.navigation.openDrawer}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <TouchableWithoutFeedback>

          <View style={{...styles.searchBoxType, flexDirection:'row'}}>

          <FontAwesome5 name='search' size={15} color='#B8BBBC'/>
            <TextInput
              placeholder="Enter keyword to search                      "
              placeholderTextColor="#D8D8D8"
            />

           </View>
          </TouchableWithoutFeedback>

          <TouchableOpacity style={styles.goButton}>
            <Text style={styles.goButtonText}>GO</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} contentContainerStyle={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              marginLeft:0,
              justifyContent: 'center',
              width:615,
              height:40,
              paddingLeft:0,
            }} showsHorizontalScrollIndicator={false}>

<View style={{margin:1.5, position:'relative'}}>
         <RNChipView
                title={'Exam'}
                 avatar={false}
                titleStyle={{ fontSize: 12, color: 'white', justifyContent:'center', alignItems:'flex-start' }}
                backgroundColor="#E55D6F"
                height={28}
                borderRadius={14}
                borderColor='#83CFE6'
                borderWidth={1}
                selectable={true}

              />
              </View>

             <View style={{margin:1.5, position:'relative'}}>
         <RNChipView
                title={'Reevaluation'}
                 avatar={false}
                titleStyle={{ fontSize: 12, color: 'white', justifyContent:'center', alignItems:'flex-start' }}
                backgroundColor="#E55D6F"
                height={28}
                borderRadius={14}
                 borderColor='#83CFE6'
                 borderWidth={1}
                 selectable={true}
              />
              </View>

              <View style={{margin:1.5, position:'relative'}}>
         <RNChipView
                title={'Finance'}
                avatar={false}
                titleStyle={{ fontSize: 12, color: 'white', justifyContent:'center', alignItems:'flex-start' }}
                 backgroundColor="#E55D6F"
                height={28}
                borderRadius={14}
                borderColor='#83CFE6'
                borderWidth={1}
                selectable={true}
              />
              </View>

               <View style={{margin:1.5, position:'relative'}}>
         <RNChipView
                title={'Admission'}
                avatar={false}
                titleStyle={{ fontSize: 12, color: 'white', justifyContent:'center', alignItems:'flex-start' }}
                 backgroundColor="#E55D6F"
                height={28}
                borderRadius={14}
                borderColor='#83CFE6'
                borderWidth={1}
                selectable={true}
              />
              </View>

               <View style={{margin:1.5, position:'relative'}}>
         <RNChipView
                title={'Lecture'}
                avatar={false}
                titleStyle={{ fontSize: 12, color: 'white', justifyContent:'center', alignItems:'flex-start' }}
                 backgroundColor="#E55D6F"
                height={28}
                borderRadius={14}
                borderColor='#83CFE6'
                borderWidth={1}
                selectable={true}
              />
              </View>

               <View style={{margin:1.5, position:'relative'}}>
         <RNChipView
                title={'Timetable'}
                avatar={false}
                titleStyle={{ fontSize: 12, color: 'white', justifyContent:'center', alignItems:'flex-start' }}
                 backgroundColor="#E55D6F"
                height={28}
                borderRadius={14}
                borderColor='#83CFE6'
                borderWidth={1}
                selectable={true}
              />
              </View>

        </ScrollView>
      </View>

      <View style={{marginHorizontal:10, marginVertical:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Text style={{fontSize:13.5, color:'#D3D4D4'}}>SEARCH RESULTS</Text>
      <FontAwesome5 name='filter' size={18} color='#434444'/>
      </View>


      <ScrollView style={{height:445,marginTop:5,}} showsVerticalScrollIndicator={false}>

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
    color: '#434444',
    fontWeight: 'bold',
  },
  searchBox: {
    margin: 15,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchBoxType: {
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    justifyContent: 'space-around',
    width: Dimensions.get('window').width * 0.75,
    backgroundColor: 'white',
    alignItems:'center',
    paddingLeft:5,
  },
  goButton: {
    width: Dimensions.get('window').width * 0.13,
    height: 40,
    backgroundColor: '#0FA0C0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  goButtonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});

// <Text
            //   style={{
            //     padding: 0,
            //     color: '#434444',
            //     fontWeight: 'bold',
            //     fontSize: 13,
            //   }}>
            //   Filter
            // </Text>



 // <TouchableOpacity
          //   >


          //   <FontAwesome5
          //     name="filter"
          //     size={22}
          //     color="#7FD2CA"
          //     style={{ paddingHorizontal: 3 }}
          //   />
          // </TouchableOpacity>
