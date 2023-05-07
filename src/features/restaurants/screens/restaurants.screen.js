import React from "react";
import { StatusBar } from "react-native";
import Search from "../../../components/Search";
import { Platform } from "react-native";
import RestaurantInfoCard from "../components/restaurant.info-card.component";
import styled from "styled-components/native";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "ios" ? 0 : `${StatusBar.currentHeight}px`};
`;

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen = () => {
  return (
    <StyledSafeAreaView>
      <Search />
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </StyledSafeAreaView>
  );
};

export default RestaurantScreen;
