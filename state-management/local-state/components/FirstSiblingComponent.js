import { View, Text, StyleSheet, Button } from 'react-native';
import GrandChildComponent from './GrandChildComponent';

const FirstSiblingComponent = (props) => {
  console.log('Jag är i syskon komponenten', props);

  const onChangeChildNameHandler = () => {
    props.onPressed('Eva');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Detta är mitt syskon {props.siblingName}</Text>
      {/* <Button title='Ändra namnet' onPress={onChangeChildNameHandler} /> */}
    </View>
  );
};

export default FirstSiblingComponent;

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
