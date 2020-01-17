import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet , TextInput, Dimensions, ScrollView, Image, StatusBar} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { FontAwesome5} from '@expo/vector-icons';

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

export default class PostNewComplaint extends React.Component {
  render(){
    return(

      <View>


      <View style={styles.postNewComplaintContainer}>
        <Text style={styles.postNewComplaintHeading}>Post New Complaint</Text>

<ScrollView style={{height: 580, zIndex:1}}>

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
          <Text style={{...styles.fieldTitle, marginHorizontal:20, marginTop:20}}>Describe Your Complaint</Text>
          <TextInput
          placeholder='Type your complaint in brief'
          placeholderTextColor='#D3D3D3'
          multiline={true}
          style={styles.complaintText}
          numberOfLines={20}
          clearTextOnFocus={true}
          maxLength={500}
          selectionColor='#7FD2CA'
          spellCheck={true}
          />
        </View>
        </ScrollView>



      </View>


       <Image
          source={require('../assets/kissclipart-green-circle-check-mark-clipart-check-mark-compute-4893a6ee77d1462f.png')}
          style={styles.okButton}/>


      </View>

    )
  }
}

const styles = StyleSheet.create({
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
    marginBottom:0,
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
    top:500,
    position:'absolute',
    shadowOffset:{width:5, height:5},
    shadowColor:'black',
    shadowOpacity:0.9,
    elevation:20,
  }
})
