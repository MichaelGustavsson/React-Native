import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TodoInput = (props) => {
  const [todoText, setTodoText] = useState('');

  function onTextChangedHandler(text) {
    setTodoText(text);
  }

  function addTodoItemHandler() {
    props.onAddTodo(todoText);
    setTodoText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={onTextChangedHandler}
        value={todoText}
        placeholder='Lägg till att göra'
      />
      <Button title='Lägg till' onPress={addTodoItemHandler} />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#333333',
    padding: 4,
    paddingLeft: 8,
    width: '70%',
    marginRight: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
