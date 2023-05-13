import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FavoriteContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  const isFavorite = favorites.find(
    (favorite) => favorite.placeId === restaurant.placeId
  );

  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant)
      }
    >
      <AntDesign
        size={24}
        name={`${isFavorite ? "heart" : "hearto"}`}
        color={`${isFavorite ? "red" : "white"}`}
      />
    </FavoriteButton>
  );
};

export default Favorite;
