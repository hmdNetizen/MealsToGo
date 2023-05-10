import React, { useContext } from "react";
import Search from "../../../components/Search";
import { FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurant.info-card.component";
import styled from "styled-components/native";
import Spacer from "../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantContext);

  return (
    <StyledSafeAreaView>
      <Search />
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </StyledSafeAreaView>
  );
};

export default RestaurantScreen;
