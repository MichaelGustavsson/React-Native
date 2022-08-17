import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ text }) => {
  return (
    <View style={styles.todoItemContainer}>
      <Text style={styles.todoItemText}>{text}</Text>
    </View>
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
