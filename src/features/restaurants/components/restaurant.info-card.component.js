import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.success};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}
  border-radius: 5px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Card.Content>
        <Title variant="titleLarge">{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
