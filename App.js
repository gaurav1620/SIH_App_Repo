import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Profile,
  Home,
  Search,
  MyPosts,
  SignOut,
  Statistics,
  About,
} from './screens';
import SideBar from './components/SideBar';

// LEFT HAND SIDE DRAWER

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={18} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={18} color={tintColor} />
        ),
      },
    },
    MyPosts: {
      screen: MyPosts,
      navigationOptions: {
        title: 'My Posts',
        drawerIcon: ({ tintColor }) => (
          <Feather name="bookmark" size={18} color={tintColor} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Search Grievances',
        drawerIcon: ({ tintColor }) => (
          <Feather name="search" size={18} color={tintColor} />
        ),
      },
    },
    Statistics: {
      screen: Statistics,
      navigationOptions: {
        title: 'Statistics',
        drawerIcon: ({ tintColor }) => (
          <Feather name="bar-chart-2" size={18} color={tintColor} />
        ),
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        title: 'About',
        drawerIcon: ({ tintColor }) => (
          <Feather name="info" size={18} color={tintColor} />
        ),
      },
    },
    SignOut: {
      screen: SignOut,
      navigationOptions: {
        title: 'Sign Out',
        drawerIcon: ({ tintColor }) => (
          <Feather name="log-out" size={18} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: Dimensions.get('window').width * 0.775,
    hideStatusBar: true,
    contentOptions: {
      itemsContainerStyle: {
        marginTop: 2,
        marginHoriontal: 8,
      },
    },
  }
);

// export drawer
export default createAppContainer(DrawerNavigator);  

// BOTTOM SIDE TAB

const TabNavigator = createMaterialTopTabNavigator({
  Profile: Profile,
  Home: Home,
  MyPosts: MyPosts,
});
