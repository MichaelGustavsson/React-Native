import uuid from 'react-native-uuid';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  /****************** JAVASCRIPT ****************/
  // State management...
  const [todoItems, setTodoItems] = useState([]);

  // Event handlers...
  function onAddTodoHandler(todoText) {
    setTodoItems((currentTodoItems) => [
      ...currentTodoItems,
      { text: todoText, id: uuid.v4() },
    ]);
  }

  function onDeleteTodoItemHandler(todoId) {
    console.log(todoId);
  }
  /*********************************************/

  //JSX...
  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={onAddTodoHandler} />
      <TodoList
        todoItems={todoItems}
        onDeleteTodoItem={onDeleteTodoItemHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: '#f4f4f4',
  },
});
