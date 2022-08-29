import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../utilities/constants/colors';

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
    borderColor: Colors.secondaryText,
    borderWidth: 2,
    margin: 3,
    borderRadius: 30,
    overflow: 'hidden',
  },
  buttonText: {
    color: Colors.secondaryText,
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
