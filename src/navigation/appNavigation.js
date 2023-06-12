import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, LoginScreen,MovieScreen,SignUpScreen,WelcomeScreen } from '../screens'
import { useAuth } from '../auth';

const Stack = createNativeStackNavigator();



const AppNavigation = () => {

const {user} = useAuth();

return(
  <>
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
         <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
       </Stack.Navigator>
     </NavigationContainer>
  </>
)

// if(user){
//   return (
//     <>
//   <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </>
//   )
// }else{
//   return (
//     <>
//   <NavigationContainer>
//       <Stack.Navigator initialRouteName='Welcome'>
//         <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
//         <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
//         <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </>
//   )
// }

}

export default AppNavigation
