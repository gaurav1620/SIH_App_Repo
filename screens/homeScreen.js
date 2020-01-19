import React, { Component , useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Animated,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import PostNewComplaint from './postNewComplaint';
import { Feather } from '@expo/vector-icons';
import CustomCard from './customCard';
import StatisticsScreen from './statistics';
import { Dropdown } from 'react-native-material-dropdown';

export class CategoryDropdown extends Component {
  render() {
    let data = [{
      value: 'Department',
    }, {
      value: 'College/Insitute',
    }, {
      value: 'University',
    }];

    return (
      <Dropdown
        label='Select Category'
        data={data}
        labelFontSize={14}
        textColor='#434444'
        fontSize={14}
        itemColor='#7FD2CA'
        animationDuration={200}
        dropdownPosition={-4.3}
      />
    );
  }
}



export class SubCategoryDropdown extends Component {
  render() {
    let data = [{
      value: 'Admission',
    }, {
      value: 'Finance',
    }, {
      value: 'Examination',
    },
    {
      value: 'Lecture',
    },
    {
      value: 'TimeTable',
    },
    {
      value: 'Paper Re-evaluation',
    },];

    return (
      <Dropdown
        label='Select Subcategory'
        data={data}
        labelFontSize={14}
        textColor='#434444'
        fontSize={14}
        itemColor='#7FD2CA'
        animationDuration={200}
        dropdownPosition={-5.3}
      />
    );
  }
}



export default class HomeScreen extends React.Component {

  state={
    modalVisible:false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  buttonSize = new Animated.Value(1);

  mode = new Animated.Value(0);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 10,
      }),

      Animated.timing(this.buttonSize, {
        toValue: 1,
        duration:150,
      }),

      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
        duration:150,
      }),
    ]).start();
  };



  render() {


    const sizeStyle = {
      transform: [{ scale: this.buttonSize }],
    };

    const rot = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });


    const commentX = this.mode.interpolate({
      inputRange:[0,1],
      outputRange:[-24,-100]
    });

    const commentY = this.mode.interpolate({
      inputRange:[0,1],
      outputRange:[-50,-100]
    });

    const addX = this.mode.interpolate({
      inputRange:[0,1],
      outputRange:[-24,-24]
    });

    const addY = this.mode.interpolate({
      inputRange:[0,1],
      outputRange:[-45,-140]
    });

    const chatX = this.mode.interpolate({
      inputRange:[0,1],
      outputRange:[-24,50]
    });

    const chatY = this.mode.interpolate({
      inputRange:[0,1],
      outputRange:[-50,-100]
    });


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

          <FontAwesome5 name="bars" size={30} color="#434444" />
          <Text style={styles.headerofEachScreen}>Home</Text>

          <FontAwesome5
            name="cog"
            size={30}
            color="#434444"
          />
        </TouchableOpacity>



        <Modal visible={this.state.modalVisible} animationType='slide' animationDuration={1000} onRequestClose={() => this.closeModal()}>

          <View style={{backgroundColor:'white', height:Dimensions.get('window').height,
          width:Dimensions.get('window').width, alignSelf:'center',
           }}>

           <View>


           <View style={styles.postNewComplaintContainer}>

           <TouchableOpacity style={{justifyContent:'center', alignSelf:'center', alignItems:'center', }}>
            <FontAwesome5 name='times' style={{margin:10, marginTop:20}} size={23} color='gray' onPress={() => this.closeModal()}/>
           </TouchableOpacity>
             <Text style={styles.postNewComplaintHeading}>Post New Complaint</Text>


             <View>
             <Text style={{...styles.fieldTitle, marginHorizontal:20, marginTop:20}}>Subject</Text>
             <TextInput
             style={styles.subjectInput}
             placeholder={'Enter subject of your complaint'}
             placeholderTextColor='#D3D3D3'
             fontSize={14}
             multiline={true}
             clearButtonMode='always'
             />
             </View>

             <View style={{marginTop:10 , marginHorizontal:20 , flexDirection:'row' , justifyContent:'space-between'}}>
                 <View style={{flex:1, paddingRight:5}}>
                 <Text style={{...styles.fieldTitle,marginTop:15}}>Category</Text>
                 <CategoryDropdown />
                 </View>

                 <View style={{flex:1, paddingLeft:5}}>
                 <Text style={{...styles.fieldTitle,marginTop:15}}>Sub-Category</Text>
                 <SubCategoryDropdown/>
                 </View>
             </View>

             <View style={{marginBottom:10}}>
             <ScrollView style={{height:250}}>
             <View style={{flexDirection:'row', width:Dimensions.get('window').width-40,
               alignSelf:'center', justifyContent:'space-between',}}>
               <Text style={{...styles.fieldTitle, marginTop:20}}>Describe Your Complaint</Text>
               <FontAwesome5 name='paperclip' size={18} color='gray' style={{marginTop:20, marginHoriontal:5}}/>
            </View>
               <TextInput
               placeholder='Type your complaint in brief'
               placeholderTextColor='#D3D3D3'
               multiline={true}
               style={styles.complaintText}
               numberOfLines={20}
               clearTextOnFocus={true}
               maxLength={1000}
               selectionColor='#7FD2CA'
               spellCheck={true}
               />
               </ScrollView>
             </View>




           </View>


            <Image
               source={require('../assets/kissclipart-green-circle-check-mark-clipart-check-mark-compute-4893a6ee77d1462f.png')}
               style={styles.okButton}/>


           </View>

          </View>
        </Modal>

<ScrollView style={{zIndex:0, marginBottom:135,}}>
<CustomCard/>
<CustomCard/>
<CustomCard/>
<CustomCard/>
<CustomCard/>
<CustomCard/>
<CustomCard/>
<CustomCard/>
</ScrollView>


 <View
          style={{
            height: 60,
            width: Dimensions.get('window').width,
            backgroundColor: '#E2EAE8',
            position: 'absolute',
            top: Dimensions.get('window').height - 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            elevation:4,
            zIndex:1,
          }}>
          <Feather name="bar-chart-2" size={22} style={styles.tabIcon} color='gray' onPress={()=>{this.props.navigation.navigate('./statistics.js')}}/>
          <Feather name="search" size={22} style={styles.tabIcon } color='gray' />
          <Feather size={0} />
          <Feather name="bookmark" size={22} style={styles.tabIcon} color='gray' />
          <Feather name="user" size={22} style={styles.tabIcon} color='gray' />
        </View>

        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            alignSelf: 'center',

          }}>

          <Animated.View style={{position:'absolute', left:commentX, top:commentY}}>
          <View style={styles.secondaryButton}>
          <Feather name='file-text' size={24} color='white'/>
          </View>
          </Animated.View>

           <Animated.View style={{position:'absolute' , left:addX, top:addY}}>
          <View style={styles.secondaryButtonAdd}>
          <Feather name='plus' size={28} color='white' onPress={() => this.openModal()}/>
          </View>
          </Animated.View>

           <Animated.View style={{position:'absolute', left:chatX, top:chatY}}>
          <View style={styles.secondaryButton}>
          <Feather name='message-square' size={24} color='white'/>
          </View>
          </Animated.View>

          <Animated.View style={[styles.button, sizeStyle]}>
            <TouchableHighlight
              onPress={this.handlePress.bind(this)}
             underlayColor='transparent' >
              <Animated.View style={{ transform: [{ rotate: rot }] }}>
             <FontAwesome5 name="plus" size={28} color="#2F9C86" />
              </Animated.View>
            </TouchableHighlight>
          </Animated.View>
        </View>
      </View>

    );
  }
}

// <FontAwesome5 name="plus" size={28} color="#2F9C86" />
const styles = StyleSheet.create({
  headerofEachScreen: {
    padding: 2.5,
    fontSize: 20,
    color: '#434444',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    width: 72,
    borderRadius: 36,
    position: 'absolute',
    top: Dimensions.get('window').height - 98,
    elevation: 10,
    shadowColor:'black',
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.7,

  },
  secondaryButton:{
    position:"absolute",
    alignItems:'center',
    justifyContent:'center',
    width:48,
    height:48,
    borderRadius:24,
    backgroundColor:'#2F9C86',
    top:Dimensions.get('window').height-40,
    //elevation:11,

  },
  secondaryButtonAdd:{
    position:"absolute",
    alignItems:'center',
    justifyContent:'center',
    width:48,
    height:48,
    borderRadius:24,
    backgroundColor:'#434444',
    top:Dimensions.get('window').height-40,
    borderColor:'#2F9C86',
    borderWidth:1.5,
    //elevation:11,
  },
  postComplaintModal:{
    backgroundColor:'rgba(52, 12, 12, 0.9)',

  },
  postNewComplaintContainer:{
  },
  postNewComplaintHeading:{
    marginHorizontal:15,
    marginVertical:10,
    alignSelf:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'#434444',
  },
  subjectInput:{
    marginHorizontal:10,
    marginVertical:5,
    height:30,
    borderBottomColor:'#D3D4D4',
    borderBottomWidth:1,
    width:Dimensions.get('window').width - 40,
    alignSelf:'center',
    paddingHorizontal:0,
    maxHeight:50,
  },
  fieldTitle:{
    color:'#2F9C86',
    fontSize:15,
    fontWeight:'bold',
  },
  complaintText:{
    height:180,
    marginHorizontal:20,
    borderColor:'#D3D3D4',
    borderRadius:6,
    borderWidth:1,
    padding:10,
    marginVertical:10,
    textAlign:'center'
  },
  okTab:{
    height:80,
    width:Dimensions.get('window').width,
    backgroundColor:'#FFFAFA',
    position:'absolute',
    bottom:0,
    //elevation:2,
    //transform:[{rotate:'180deg'}],
    shadowOpacity:1,
    borderTopColor:'#D3D3D3',
    //borderTopWidth:0.5,
    //shadowRadius:10 ,
    zIndex:2
  },
  okButton:{
    height:50,
    width:50,
    alignSelf:'center',
    margin:10,
    top:20,
  //  position:'absolute',
    shadowOffset:{width:5, height:5},
    shadowColor:'black',
    shadowOpacity:0.9,
    elevation:20,
  }

});

// style={{transform:[{rotate:rot}] }}


// <ScrollView style={{zIndex:0, marginBottom:135,}}>
// <CustomCard/>
// <CustomCard/>
// <CustomCard/>
// <CustomCard/>
// <CustomCard/>
// <CustomCard/>
// <CustomCard/>
// <CustomCard/>
// </ScrollView>


//  <View
//           style={{
//             height: 60,
//             width: Dimensions.get('window').width,
//             backgroundColor: '#E2EAE8',
//             position: 'absolute',
//             top: Dimensions.get('window').height - 60,
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-around',
//             elevation:4,
//             zIndex:1,
//           }}>
//           <Feather name="bar-chart-2" size={22} style={styles.tabIcon} color='gray' onPress={()=>{this.props.navigation.navigate('./statistics.js')}}/>
//           <Feather name="search" size={22} style={styles.tabIcon } color='gray' />
//           <Feather size={0} />
//           <Feather name="bookmark" size={22} style={styles.tabIcon} color='gray' />
//           <Feather name="user" size={22} style={styles.tabIcon} color='gray' />
//         </View>

//         <View
//           style={{
//             position: 'absolute',
//             alignItems: 'center',
//             alignSelf: 'center',

//           }}>

//           <Animated.View style={{position:'absolute', left:commentX, top:commentY}}>
//           <View style={styles.secondaryButton}>
//           <Feather name='file-text' size={24} color='white'/>
//           </View>
//           </Animated.View>

//            <Animated.View style={{position:'absolute' , left:addX, top:addY}}>
//           <View style={styles.secondaryButtonAdd}>
//           <Feather name='plus' size={28} color='white' />
//           </View>
//           </Animated.View>

//            <Animated.View style={{position:'absolute', left:chatX, top:chatY}}>
//           <View style={styles.secondaryButton}>
//           <Feather name='message-square' size={24} color='white'/>
//           </View>
//           </Animated.View>

//           <Animated.View style={[styles.button, sizeStyle]}>
//             <TouchableHighlight
//               onPress={this.handlePress.bind(this)}
//              underlayColor='transparent' >
//               <Animated.View style={{ transform: [{ rotate: rot }] }}>
//              <FontAwesome5 name="plus" size={28} color="#2F9C86" />
//               </Animated.View>
//             </TouchableHighlight>
//           </Animated.View>
//         </View>
//       </View>


//  const [ newComplaintModal, setNewComplaintModal] = useState(false);
