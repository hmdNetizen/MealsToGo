import React, { useContext } from "react";
import { FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurant.info-card.component";
import styled from "styled-components/native";
import Spacer from "../components/spacer/spacer.component";
import Search from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import LoadingIndicator from "../components/utilities/LoadingIndicator.component";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <StyledSafeAreaView>
      {isLoading && <LoadingIndicator />}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </StyledSafeAreaView>
  );
};

export default RestaurantScreen;
