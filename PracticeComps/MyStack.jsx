/**
 * Main Title: My Stack Navigator
 * Creted Time: Friday, June 14, 20:33
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Stack = createStackNavigator();

const FeedStackScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home1 Screen</Text>
    </SafeAreaView>
  );
};

const ProfileStackScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home2 Screen</Text>
    </SafeAreaView>
  );
};

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={FeedStackScreen} name="Home1"></Stack.Screen>
      <Stack.Screen
        component={ProfileStackScreen}
        name="Home2"></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
