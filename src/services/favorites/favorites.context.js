import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (favorite) => {
    setFavorites([favorites, ...favorites]);
  };

  const remove = (favorite) => {
    const newFavorites = favorites.filter((x) => {
      return x.placeId !== favorite.placeId;
    });

    setFavorites(newFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
