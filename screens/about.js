import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Constants from 'expo-constants';

const CONTENT = [
  {
    title: 'How to view the complaints posted by myself?',
    content: 'hey',
  },
  {
    title: 'Second',
    content: 'hi',
  },
  {
    title: 'Third',
    content: 'ok',
  },
  {
    title: 'Fourth',
    content: 'okay',
  },
  {
    title: 'Fifth',
    content: 'hello',
  },
];

export default class AboutScreen extends React.Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={300}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        <FontAwesome5
          name="chevron-circle-down"
          size={15}
          color="#0FA0C0"
          style={isActive ? styles.iconActive : styles.iconInactive}
        />
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          style={styles.info}
          animation={isActive ? undefined : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

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
            <Text style={styles.headerofEachScreen}>About</Text>

            <FontAwesome5
              name="bars"
              size={30}
              color="black"
              onPress={this.props.navigation.openDrawer}

            />
          </TouchableOpacity>
        </View>

        <View>
          <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              expandMultiple={multipleSelect}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={400}
              onChange={this.setSections}
            />
          </ScrollView>
        </View>
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
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: StatusBar.statusBarHeight,
    margin: 10,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    marginVertical: 3,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    paddingRight: 10,
    width: 300,
    fontWeight: 'bold',
    color: '#434444',
  },
  content: {
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'white',
  },
  iconActive: {
    alignItems: 'flex-end',
    transform: [{ rotateX: '180deg' }],
    padding: 5,
    color: '#07CCF7',
    right: 10,
    textAlignVertical: 'center',
  },
  iconInactive: {
    alignItems: 'flex-end',
    padding: 5,
    right: 10,
    textAlignVertical: 'center',
  },
  info: {
    color: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
