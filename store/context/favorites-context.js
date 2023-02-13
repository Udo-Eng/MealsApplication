import React, { useState } from "react";

export const FavouritesContext = React.createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealsIds, setFavoritesMeaslsIds] = useState([]);

  function addFavorite(id) {
    setFavoritesMeaslsIds((currentFavIds) => [...currentFavIds, id]);
  }


  function removeFavorite(id){
     setFavoritesMeaslsIds((currentFavIds) => {
        return currentFavIds.filter((mealId) =>  mealId !== id);
     });
  }

  const value ={
        ids : favoritesMealsIds,
        addFavorite,
        removeFavorite,
  }

  

  // Return the react context Provider as a wrapper around your application
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavoritesContextProvider;
