import { View, Text, StyleSheet, Button } from 'react-native';

const GrandChildComponent = (props) => {
  console.log('Jag är nu i barnbarnets komponent', props);

  const onChangeGrandChildNameHandler = () => {
    props.onPressed('Evert');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Detta är barnbarnet {props.grandChildName}
      </Text>
      <Button
        title='Ändra barnbarnets namn'
        onPress={onChangeGrandChildNameHandler}
      />
    </View>
  );
};

export default GrandChildComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    color: '#ff0000',
  },
});
