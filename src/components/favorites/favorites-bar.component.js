import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import Spacer from "../../features/restaurants/components/spacer/spacer.component";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";
import { Text } from "../../features/restaurants/components/typography/text.component";

const FavoriteBarWrapper = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
`;

const FavoritesBar = ({ favorites, onNavigate }) => {
  if (favorites.length === 0) {
    return null;
  }

  return (
    <FavoriteBarWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <Spacer position="left" size="medium" key={restaurant.name}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetails", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoriteBarWrapper>
  );
};

export default FavoritesBar;
