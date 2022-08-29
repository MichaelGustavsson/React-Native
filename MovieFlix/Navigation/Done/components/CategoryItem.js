import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Colors from '../utilities/constants/colors';

const CategoryItem = ({ item }) => {
  return (
    <View style={styles.grid}>
      <Pressable>
        <View style={styles.categoryContainer}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.categoryTitle}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryItem;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    marginTop: 40,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primaryText,
    marginHorizontal: 10,
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
  },
  categoryTitle: {
    color: Colors.lightText,
    fontSize: 18,
    marginVertical: 8,
  },
});
