import { Text, StyleSheet, View } from 'react-native';

import Colors from '../../utilities/constants/colors';

const AppHeader = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  headerText: {
    color: Colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
});
