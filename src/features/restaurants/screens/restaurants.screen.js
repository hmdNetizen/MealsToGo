import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import RestaurantInfoCard from "../components/restaurant.info-card.component";
import styled from "styled-components/native";
import Spacer from "../components/spacer/spacer.component";
import Search from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import LoadingIndicator from "../components/utilities/LoadingIndicator.component";
import { SafeArea } from "../../../components/utilities/safearea.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <Search />
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
