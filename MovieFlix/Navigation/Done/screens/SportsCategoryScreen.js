import { FlatList, View, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import AppHeader from '../components/ui/AppHeader';

import { SPORTS_CATEGORIES } from '../data/CategoriesData';
import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate';
const SportsCategoryScreen = () => {
  const renderCategoryItem = (category) => {
    return <CategoryItem item={category.item} />;
  };

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <FlatList
          data={SPORTS_CATEGORIES}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderCategoryItem}
        />
      </View>
    </ScreenTemplate>
  );
};

export default SportsCategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    color: Colors.lightText,
    fontSize: 24,
    marginHorizontal: 12,
  },
});
