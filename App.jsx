/**
 * Main Title: App Component, including many comps built by myself
 * Created Time: Wendesday, June 05, 2024, 12:18
 * Last Edit Time: Wendesday, June 05, 2024, 22: 49
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MyButton, MyKeyboard} from './PracticeComps';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <MyButton />
      <MyKeyboard></MyKeyboard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
