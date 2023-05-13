import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import RestaurantInfoCard from "../components/restaurant.info-card.component";
import styled from "styled-components/native";
import Spacer from "../components/spacer/spacer.component";
import Search from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import LoadingIndicator from "../components/utilities/LoadingIndicator.component";
import { SafeArea } from "../../../components/utilities/safearea.component";
import { FavoriteContext } from "../../../services/favorites/favorites.context";
import FavoritesBar from "../../../components/favorites/favorites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoriteContext);

  const [toggle, setToggle] = useState(false);

  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <Search
        isFavoriteToggled={toggle}
        onFavoriteToggled={() => setToggle(!toggle)}
      />
      {toggle && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
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
    </SafeArea>
  );
};

export default RestaurantScreen;
