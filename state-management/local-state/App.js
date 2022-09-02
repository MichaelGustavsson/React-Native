import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import ChildComponent from './components/ChildComponent';
import FirstSiblingComponent from './components/FirstSiblingComponent';

export default function App() {
  const [firstName, setFirstName] = useState('Michael');

  const onChangeNameHandler = (name) => {
    setFirstName(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Mitt namn är {firstName}</Text>
      <Button onPress={() => onChangeNameHandler('Nils')} title='Byt namn' />
      <ChildComponent name={firstName} onPressed={onChangeNameHandler} />
      <FirstSiblingComponent siblingName={firstName} />
      <StatusBar style='auto' />
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
  name: {
    fontSize: 24,
  },
});
