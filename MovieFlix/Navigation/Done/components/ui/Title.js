import { Text, StyleSheet } from 'react-native';

import Colors from '../../utilities/constants/colors';

const Title = ({ children }) => {
  return <Text style={styles.titleText}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  titleText: {
    color: Colors.light,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: Colors.light,
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 5,
  },
});
