import uuid from 'react-native-uuid';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  function onAddTodoHandler(todoText) {
    setTodoItems((currentTodoItems) => [
      ...currentTodoItems,
      { text: todoText, id: uuid.v4() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={onAddTodoHandler} />
      <View style={styles.todoListContainer}>
        <FlatList
          data={todoItems}
          renderItem={(todoItem) => {
            return <TodoItem text={todoItem.item.text} />;
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
  todoListContainer: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
    marginTop: 16,
    paddingTop: 24,
  },
});
