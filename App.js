import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';






export default function App() {
  
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const button1Pressed = () => {
    setResult(value1 + value2);
  }
  
  const button2Pressed = () => {
    setResult(value1 - value2);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <View>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={value1 => setValue1(parseInt(value1))} value={value1}/>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={value2 => setValue2(parseInt(value2))} value={value2}/>
      </View>
      <View style={styles.buttons}>
        <Button title='+' onPress={button1Pressed}/>
        <Button title='-' onPress={button2Pressed}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 100,
    margin: 7,
    borderWidth: 1,
    padding: 5,
  },
  buttons: {
    flexDirection: 'row',
  }
});
