import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function Detail() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detail Screen</Text>
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
