import Category from '../models/Category';

export const CATEGORIES = [
  new Category(1, 'Spännande', require('../assets/images/action.jpg')),
  new Category(2, 'Äventyr', require('../assets/images/adventure.jpg')),
  new Category(3, 'Thriller', require('../assets/images/thrillers.jpg')),
  new Category(4, 'Skräck', require('../assets/images/horror.jpg')),
  new Category(5, 'Drama', require('../assets/images/drama.jpg')),
];

export const SPORTS_CATEGORIES = [
  new Category(6, 'Golf', require('../assets/images/no-image.png')),
  new Category(7, 'Hockey', require('../assets/images/no-image.png')),
  new Category(8, 'Fotboll', require('../assets/images/no-image.png')),
  new Category(9, 'Friidrott', require('../assets/images/no-image.png')),
];

export const DOCUMENTARY_CATEGORIES = [
  new Category(10, 'Populära', require('../assets/images/no-image.png')),
];
