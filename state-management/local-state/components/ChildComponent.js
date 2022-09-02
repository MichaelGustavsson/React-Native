import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import GrandChildComponent from './GrandChildComponent';

const ChildComponent = (props) => {
  const [firstName, setFirstName] = useState('');

  console.log('Jag är i barnkomponenten', props);

  const onChangeChildNameHandler = (name) => {
    // props.onPressed('Eva');
    setFirstName(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Detta är barnkomponenten {firstName}</Text>
      <Button
        title='Ändra namnet'
        onPress={() => onChangeChildNameHandler('Emma')}
      />
      <GrandChildComponent
        grandChildName={firstName}
        onPressed={onChangeChildNameHandler}
      />
    </View>
  );
};

export default ChildComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    color: '#0000ff',
  },
});
