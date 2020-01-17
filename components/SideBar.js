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
      source={require('../assets/kisspng-abstract-art-blue-geometry-stock-illustration-science-fiction-elements-design-background-5a7e82a879a7a6.3867309415182404244983.png')}
      style={{ height: 200, width: 280, padding: 16, paddingTop: 30 }}
      resizeMode="cover">
      <Image
        source={require('../assets/5065916-stockvader-predicted-adig-user-profile-icon-png-clipart-profile-icon-png-880_880.png')}
        style={styles.profilePic}
      />

      <View>
        <Text style={styles.usernameText}>John Doe</Text>
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
    color: 'gold',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
