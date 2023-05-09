import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "./spacer/spacer.component";
import { Text } from "./typography/text.component";

import {
  Address,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardContent,
  RestaurantCardCover,
  SectionEnd,
} from "./restaurant-info-card.styles";

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
          <Text variant="label">{name}</Text>
          <Rating>
            {ratingArray.map((rating, index) => (
              <SvgXml xml={star} key={index} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </Info>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="large" />
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Spacer position="left" size="large" />
          <Icon
            source={{
              uri: icon,
            }}
          />
        </SectionEnd>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
