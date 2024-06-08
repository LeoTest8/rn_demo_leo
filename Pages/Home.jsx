import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Details"
        onPress={() => {
          navigation.navigate('Detail');
        }}></Button>
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
