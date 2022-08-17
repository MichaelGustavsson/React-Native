import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TodoInput = (props) => {
  const [todoText, setTodoText] = useState('');

  function onTextChangedHandler(text) {
    setTodoText(text);
  }

  function addTodoItemHandler() {
    props.onAddTodo(todoText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={onTextChangedHandler}
        placeholder='Lägg till att göra'
      />
      <Button title='Lägg till' onPress={addTodoItemHandler} />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333333',
    padding: 4,
    paddingLeft: 8,
    marginBottom: 8,
    marginRight: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
