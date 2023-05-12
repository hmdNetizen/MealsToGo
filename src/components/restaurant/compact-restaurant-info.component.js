import React from "react";
import styled from "styled-components/native";
import { Text } from "../../features/restaurants/components/typography/text.component";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebViewImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

const Image = isAndroid ? CompactWebViewImage : CompactImage;

const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
