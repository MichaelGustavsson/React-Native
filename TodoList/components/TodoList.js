import { View, FlatList, StyleSheet } from 'react-native';

import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <View style={styles.todoListContainer}>
      <FlatList
        data={props.todoItems}
        renderItem={(todoItem) => {
          return (
            <TodoItem
              onRemoveTodoItem={props.onDeleteTodoItem}
              item={todoItem.item}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todoListContainer: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
    marginTop: 16,
    paddingTop: 24,
  },
});
