/**
 * Main Title: <Pressable /> Component Practice
 * Created Time: Wendesday, June 05, 2024, 12:18
 */

import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

const longPressHandle = () => {
  console.log('Long Press');
};

const pressInHandle = () => {
  console.log('Press In');
};

const pressOutHandle = () => {
  console.log('Press Out');
};

export default function MyPressable() {
  return (
    <Pressable
      onLongPress={longPressHandle}
      onPressIn={pressInHandle}
      onPressOut={pressOutHandle}
      style={styles.testBtn}>
      <Text>Press Me</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  testBtn: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
});
