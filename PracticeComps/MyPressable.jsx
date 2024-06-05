/**
 * Main Title: <Pressable /> Component Practice
 * Created Time: Wendesday, June 05, 2024, 12:18
 */

import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {useState} from 'react';

export default function MyPressable() {
  const [bgColor, setBgColor] = useState('yellow');
  const longPressHandle = () => {
    console.log('Long Press');
  };

  const pressInHandle = () => {
    console.log('Press In', bgColor);
    setBgColor('red');
    console.log(bgColor);
  };

  const pressOutHandle = () => {
    console.log('Press Out');
    setBgColor("yellow")
  };
  return (
    <Pressable
      onLongPress={longPressHandle}
      onPressIn={pressInHandle}
      onPressOut={pressOutHandle}
      style={[styles.testBtn, {backgroundColor: bgColor}]}>
      <Text>Press Me</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  testBtn: {
    // width: 430,
    // height: 50,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'yellow',
    pointerEvents: 'box-only',
  },
});
