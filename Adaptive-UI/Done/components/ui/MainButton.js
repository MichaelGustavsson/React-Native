import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

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
    // backgroundColor: '#84074c',
    // backgroundColor: Platform.OS === 'android' ? '#20207b' : '#84074c',
    backgroundColor: Platform.select({ ios: '#84074c', android: '#3F51B5' }),
    margin: 3,
    borderRadius: Platform.select({ ios: 30, android: 0 }),
  },
  buttonText: {
    color: Platform.select({ ios: '#ffffff', android: '#C5CAE9' }),
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
