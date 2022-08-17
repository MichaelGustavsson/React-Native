import uuid from 'react-native-uuid';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [todoText, setTodoText] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  function onTextChangedHandler(text) {
    setTodoText(text);
  }

  function onAddTodoHandler() {
    setTodoItems((currentTodoItems) => [
      ...currentTodoItems,
      { text: todoText, id: uuid.v4() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onTextChangedHandler}
          placeholder='Lägg till att göra'
        />
        <Button title='Lägg till' onPress={onAddTodoHandler} />
      </View>
      <View style={styles.todoListContainer}>
        <FlatList
          data={todoItems}
          renderItem={(todoItem) => {
            return (
              <View style={styles.todoItemContainer}>
                <Text style={styles.todoItemText}>{todoItem.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
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
    flex: 1,
    borderWidth: 1,
    borderColor: '#333333',
    padding: 4,
    paddingLeft: 8,
    marginBottom: 8,
    marginRight: 8,
  },

  todoListContainer: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
    marginTop: 16,
    paddingTop: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoItemContainer: {
    backgroundColor: '#ef8615',
    padding: 8,
    paddingLeft: 16,
    marginTop: 16,
    borderRadius: 20,
  },
  todoItemText: {
    color: '#ffffff',
  },
});
