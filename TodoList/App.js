import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <TextInput style={styles.textInput} placeholder='Lägg till att göra' />
      <Button title='Lägg till' />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: '#f4f4f4',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 4,
    paddingLeft: 8,
    marginBottom: 8,
  },
});
