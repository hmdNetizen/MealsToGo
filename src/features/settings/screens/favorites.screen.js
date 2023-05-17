import React, { useContext } from "react";
import { FavoriteContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from "../../../components/utilities/safearea.component";
import { Text } from "../../restaurants/components/typography/text.component";

import styled from "styled-components/native";
import { RestaurantList } from "../../restaurants/components/restaurants-list.component";
import Spacer from "../../restaurants/components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import RestaurantInfoCard from "../../restaurants/components/restaurant.info-card.component";

const NoFavoritesArea = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoriteContext);
  return favorites.length ? (
    <RestaurantList
      data={favorites}
      renderItem={({ item }) => {
        return (
          <>
            <Spacer position="bottom" size="large">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          </>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};

export default FavoritesScreen;
