import uuid from 'react-native-uuid';
import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
    setTodoItems((currentTodoItems) => {
      return currentTodoItems.filter((item) => item.id !== todoId);
    });
  }
  /*********************************************/

  //JSX...
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./assets/images/checklist.jpg')}
          />
        </View>
        <TodoInput onAddTodo={onAddTodoHandler} />
        <TodoList
          todoItems={todoItems}
          onDeleteTodoItem={onDeleteTodoItemHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: '#180d46',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
});
