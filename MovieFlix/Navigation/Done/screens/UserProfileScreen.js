import { View, Text, StyleSheet } from 'react-native';

import ScreenTemplate from './ScreenTemplate';
import Colors from '../utilities/constants/colors';

const UserProfileScreen = () => {
  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <Text style={styles.title}>Mina inställningar</Text>
      </View>
    </ScreenTemplate>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: Colors.lightText,
    fontSize: 24,
    textAlign: 'center',
  },
});
