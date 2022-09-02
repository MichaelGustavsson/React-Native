import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../utilities/constants/colors';

const CategoryItem = ({ item }) => {
  return (
    <View style={styles.grid}>
      <Pressable style={styles.button}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={item.image} resizeMode='cover' />
          <Text style={styles.imageTitle}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageTitle: {
    color: Colors.light,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    opacity: 0.6,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
});
