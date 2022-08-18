import { View, Text, StyleSheet, Pressable } from 'react-native';

const TodoItem = ({ item, onRemoveTodoItem }) => {
  return (
    <Pressable onPress={() => onRemoveTodoItem(item.id)}>
      <View style={styles.todoItemContainer}>
        <Text style={styles.todoItemText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
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
