import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import MainScreen from './main_screen/mainScreen';
import MainScreen from './main_screen/MainScreen';

export default function App() {
  return (
    <MainScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
