import React from "react";
import { StatusBar } from "react-native";
import Search from "../../../components/Search";
import { Platform, FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurant.info-card.component";
import styled from "styled-components/native";
import Spacer from "../components/spacer/spacer.component";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "ios" ? 0 : `${StatusBar.currentHeight}px`};
`;

const RestaurantScreen = () => {
  return (
    <StyledSafeAreaView>
      <Search />
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </StyledSafeAreaView>
  );
};

export default RestaurantScreen;
