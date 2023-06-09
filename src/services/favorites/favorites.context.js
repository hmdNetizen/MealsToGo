import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavorite = async (value, uid) => {
    try {
      await AsyncStorage.setItem(`@favorites-${uid}`, JSON.stringify(value));
    } catch (e) {
      console.log("Error saving favorite ", e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
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
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavorite(favorites, user.uid);
    }
  }, [favorites, user]);

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
