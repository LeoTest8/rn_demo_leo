/**
 * Main Title: <Pressable /> Component Practice
 * Created Time: Wendesday, June 05, 2024, 12:18
 */

import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {useState} from 'react';

export default function MyButton() {
  const [bgColor, setBgColor] = useState('yellow');
  const [textColor, setTextColor] = useState('black');

  const longPressHandle = () => {
    console.log('Long Press');
  };

  const pressInHandle = () => {
    setBgColor('red');
    setTextColor('white');
  };

  const pressOutHandle = () => {
    setBgColor('yellow');
    setTextColor('black');
  };
  return (
    <Pressable
      onLongPress={longPressHandle}
      onPressIn={pressInHandle}
      onPressOut={pressOutHandle}
      style={[
        styles.testBtn,
        {
          backgroundColor: bgColor,
        },
      ]}>
      <Text
        style={{
          color: textColor,
        }}>
        Press Me
      </Text>
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
  },
});
