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

// import React from 'react';
// import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Home, Detail} from './Pages';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen component={Home} name="Home"></Stack.Screen>
//         <Stack.Screen component={Detail} name="Detail"></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

/**
 * Main Title: React Navigation Practice 2
 *   - Navigate To Another Screen With Params
 * Created Time: Sunday, June 09, 2024, 12:29
 * Operations:
 */

// import React from 'react';
// import {StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Home = ({navigation}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go To Details"
//         onPress={() => {
//           navigation.navigate('Details', {
//             id: 4523,
//           });
//         }}></Button>
//     </SafeAreaView>
//   );
// };

// const Details = ({navigation, route}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Details Screen</Text>
//       <Text>Params From Home:</Text>
//       <Text>{JSON.stringify(route.params)}</Text>
//     </SafeAreaView>
//   );
// };

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen component={Home} name="Home"></Stack.Screen>
//         <Stack.Screen
//           component={Details}
//           name="Details"
//           options={{
//             headerStyle: {
//               backgroundColor: '#fef422',
//             },
//             headerTintColor: 'red',
//           }}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })

/**
 * Main Title: React Navigation Practice 3
 *   - Header Buttons
 * Created Time: Monday, June 10, 2024, 12:29
 */
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React, {useState, useEffect} from 'react';
// import {Text, View, SafeAreaView, Button} from 'react-native';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           component={HomeScreen}
//           name="Home"
//           options={{
//             headerStyle: {
//               backgroundColor: '#dcf',
//             },
//             headerRight: () => <Button title="Update Count"></Button>,
//           }}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function HomeScreen({navigation}) {
//   const [Count, setCount] = useState(0);

//   useEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button
//           onPress={() => setCount(c => c + 1)}
//           title="UpadateCount"
//           color={''}></Button>
//       ),
//     });
//   }, [navigation]);

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Home Screen</Text>
//       <Text>Count: {Count}</Text>
//     </SafeAreaView>
//   );
// }

/**
 * Main Title: React Navigation Practice 4
 *   - Tab Navigation
 * Created Time: Monday, June 10, 2024, 12:29
 */

import React from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tab1 = () => {
  return <Text>Tab1</Text>;
};
const Tab2 = () => {
  return <Text>Tab2</Text>;
};
const Tab3 = () => {
  return <Text>Tab3</Text>;
};
const Tab4 = () => {
  return <Text>Tab4</Text>;
};

const DetailsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Tab1}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: '#fe34cc',
        }}></Tab.Screen>
      <Tab.Screen
        name="Profie"
        component={Tab2}
        options={{
          tabBarActiveTintColor: '#3c3cfd',
        }}></Tab.Screen>
      <Tab.Screen
        name="Page"
        component={Tab3}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: '#ccc',
        }}></Tab.Screen>
      <Tab.Screen
        name="Like"
        component={Tab4}
        options={{
          tabBarActiveBackgroundColor: '#d4d',
          tabBarButton: () => {
            return (
              <Button
                onPress={() => console.log('Pressed Tab4')}
                title="Like"></Button>
            );
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Details');
        }}
        title="Go To Details"></Button>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
