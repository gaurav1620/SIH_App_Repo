import React from 'react';
import Screen from './homeScreen';
import Trial from './trial';
import AboutScreen from './about';
import SearchScreen from './search';
import MyPostsScreen from './myPosts';
import ProfileScreen from './profile';
import StatisticsScreen from './statistics';

export const Home = ({ navigation }) => (
  <Screen navigation={navigation} name="About" />
);
export const Profile = ({ navigation }) => (
  <ProfileScreen navigation={navigation} />
);
export const MyPosts = ({ navigation }) => (
  <MyPostsScreen navigation={navigation} />
);
export const Search = ({ navigation }) => (
  <SearchScreen navigation={navigation} />
);
export const Statistics = ({ navigation }) => (
  <StatisticsScreen navigation={navigation} />
);
export const About = ({ navigation }) => (
  <AboutScreen navigation={navigation} />
);
export const SignOut = ({ navigation }) => (
  <Screen navigation={navigation} name="SignOut" />
);
