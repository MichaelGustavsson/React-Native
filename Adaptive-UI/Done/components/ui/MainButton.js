import { View, Text, Pressable, StyleSheet } from 'react-native';

const MainButton = ({ children, onPressed }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPressed}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: '#84074c',
    margin: 3,
    borderRadius: 30,
  },
  buttonText: {
    color: '#ffffff',
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
