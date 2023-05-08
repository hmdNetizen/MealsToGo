import React from "react";
import { Card } from "react-native-paper";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "./spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}
  border-radius: 5px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardContent = styled(Card.Content)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <RestaurantCardContent>
        <Info>
          <Title variant="titleLarge">{name}</Title>
          <Rating>
            {ratingArray.map((rating, index) => (
              <SvgXml xml={star} key={index} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </Info>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="label" style={{ color: "red" }}>
              CLOSED TEMPORARILY
            </Text>
          )}
          <Spacer variant="left.large" />
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Spacer variant="left.large" />
          <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </SectionEnd>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
