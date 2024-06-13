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
      <Drawer.Screen component={FeedDrawerScreen} name="Feed"></Drawer.Screen>
      <Drawer.Screen
        component={ProfileDrawerScreen}
        name="Profile"></Drawer.Screen>
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
