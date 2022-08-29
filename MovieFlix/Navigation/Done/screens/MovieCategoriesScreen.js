import { View, Text, FlatList, StyleSheet } from 'react-native';
import AppHeader from '../components/ui/AppHeader';

import Colors from '../utilities/constants/colors';
import { CATEGORIES } from '../data/CategoriesData';

const MovieCategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <Text style={styles.text}>Film kategorier</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(category) => {
          return (
            <View>
              <Text style={styles.title}>{category.item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MovieCategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    color: Colors.lightText,
    fontSize: 24,
    textAlign: 'center',
  },
  title: {
    color: Colors.lightText,
    fontSize: 16,
  },
});
