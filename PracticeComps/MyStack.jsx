/**
 * Main Title: My Stack Navigator
 * Creted Time: Friday, June 14, 20:33
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Drawer = createStackNavigator();

const FeedDrawerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home1 Screen</Text>
    </SafeAreaView>
  );
};

const ProfileDrawerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home2 Screen</Text>
    </SafeAreaView>
  );
};

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={FeedDrawerScreen} name="Home1"></Drawer.Screen>
      <Drawer.Screen
        component={ProfileDrawerScreen}
        name="Home2"></Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
