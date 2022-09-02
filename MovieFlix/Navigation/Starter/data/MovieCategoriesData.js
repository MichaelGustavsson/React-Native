import MovieCategory from '../models/MovieCategory';

export const CATEGORIES = [
  new MovieCategory(1, 'Action', require('../assets/images/action.jpg')),
  new MovieCategory(2, 'Äventyr', require('../assets/images/adventure.jpg')),
  new MovieCategory(3, 'Thriller', require('../assets/images/thrillers.jpg')),
  new MovieCategory(4, 'Skräck', require('../assets/images/horror.jpg')),
  new MovieCategory(5, 'Drama', require('../assets/images/drama.jpg')),
];
