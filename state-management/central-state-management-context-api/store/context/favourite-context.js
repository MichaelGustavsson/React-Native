import { createContext, useState } from 'react';

// Steg 1. skapar vi vår context function
// och definierar data samt funktioner...
export const FavouriteContext = createContext({
  // Data som hanteras centralt...
  items: [],
  // funktioner som manipulerar datat
  addAsFavourite: (name) => {},
  removeFromFavourites: (name) => {},
});

// Steg 2. Skapar vi vår provider (komponent)...
const FavouriteContextProvider = ({ children }) => {
  // Använd useState för att signalera ändringar i datat...
  const [favouriteItems, setFavouriteItems] = useState([]);

  // Skapar funktioner som manipulerar tillståndet(datat)...
  function addAsFavourite(name) {
    setFavouriteItems((currentItems) => [...currentItems, name]);
  }

  function removeFromFavourites(name) {
    setFavouriteItems((currentItems) =>
      currentItems.filter((item) => item !== name)
    );
  }

  // Exponera tillståndet och funktioner
  const config = {
    favouriteNames: favouriteItems,
    add: addAsFavourite,
    remove: removeFromFavourites,
  };

  // Skapa JSX...
  return (
    <FavouriteContext.Provider value={config}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
