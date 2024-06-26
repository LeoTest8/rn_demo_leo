/**
 * Main Title: My Drawer
 * Creted Time: Friday, June 14, 12:03
 */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Drawer = createDrawerNavigator();

const FeedDrawerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Feed Screen</Text>
    </SafeAreaView>
  );
};

const ProfileDrawerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
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
