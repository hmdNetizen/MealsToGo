import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorite = async (value) => {
    try {
      await AsyncStorage.setItem("@favorites", JSON.stringify(value));
    } catch (e) {
      console.log("Error saving favorite ", e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error loading favorites ", e);
    }
  };

  const add = (favorite) => {
    setFavorites([favorite, ...favorites]);
  };

  const remove = (favorite) => {
    const newFavorites = favorites.filter((x) => {
      return x.placeId !== favorite.placeId;
    });

    setFavorites(newFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorite(favorites);
  }, [favorites]);

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
