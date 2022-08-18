import { View, Text, StyleSheet, Pressable } from 'react-native';

const TodoItem = ({ item, onRemoveTodoItem }) => {
  return (
    <View style={styles.todoItemContainer}>
      <View style={styles.todoItemTextContainer}>
        <Text style={styles.todoItemText}>{item.text}</Text>
      </View>

      <View style={styles.todoItemDeleteContainer}>
        <Pressable
          android_ripple={{ color: '#f5acac' }}
          onPress={() => onRemoveTodoItem(item.id)}
          style={({ pressed }) => pressed && styles.todoDeletePressed}
        >
          <Text style={styles.todoItemText}>X</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  todoItemTextContainer: {
    flex: 7,
    backgroundColor: '#ef8615',
    borderTopLeftRadius: 10,
  },
  todoItemText: {
    color: '#ffffff',
    padding: 12,
  },
  todoItemDeleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c0505',
  },
  todoDeletePressed: {
    opacity: 0.4,
  },
});
