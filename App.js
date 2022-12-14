import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';

function App() {
  return (
    <SafeAreaView style = {{ flex: 1}}>
      <MainStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
