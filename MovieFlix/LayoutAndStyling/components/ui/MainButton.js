import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../utilities/constants/colors';

const MainButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
        android_ripple={{ color: '#620505' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    margin: 3,
    borderColor: Colors.secondary,
    borderWidth: 2,
    overflow: 'hidden',
  },
  buttonText: {
    color: Colors.secondary,
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.25,
  },
});
