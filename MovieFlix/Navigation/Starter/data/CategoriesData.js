import Category from '../models/Category';

export const CATEGORIES = [
  new Category(1, 'Action', require('../assets/images/action.jpg')),
  new Category(2, 'Äventyr', require('../assets/images/adventure.jpg')),
  new Category(3, 'Thriller', require('../assets/images/thrillers.jpg')),
  new Category(4, 'Skräck', require('../assets/images/horror.jpg')),
  new Category(5, 'Drama', require('../assets/images/drama.jpg')),
];
