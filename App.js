import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './src/screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/appNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Loader from './src/components/Loader';


export default function App() {
  return (
      <AppNavigation/>
  );
}


