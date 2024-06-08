/**
 * Main Title: App Component, including many comps built by myself
 * Created Time: Wendesday, June 05, 2024, 12:18
 */

// import React from 'react';
// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import {MyButton, MyKeyboard} from './PracticeComps';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello World</Text>
//       <MyButton />
//       <MyKeyboard></MyKeyboard>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

/**
 * Main Title: React Navigation Practice 1
 *   - Environmaent Setting
 *   - The use of <NavigationContainer /> & createNativeStackNavigator
 *   - The Parameter in every Screen Component: navigation.navigate('Target Screen') to realize naigation
 * Created Time: Saturday, June 08, 2024, 11:58
 * Operations:
 *   - npm install @react-navigation/native
 *   - npm install react-native-screens react-native-safe-area-context
 *   - npm pod-install ios
 *   - npm install @react-navigation/native-stack
 */

import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Detail} from './Pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home"></Stack.Screen>
        <Stack.Screen component={Detail} name="Detail"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
