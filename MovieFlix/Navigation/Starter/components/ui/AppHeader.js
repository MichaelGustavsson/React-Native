import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../utilities/constants/colors';
const AppHeader = ({ children }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  headerText: {
    color: Colors.primaryText,
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
});
