import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components";
import { View } from "react-native";

const LoadingWrapper = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-25px);
`;

const LoadingIndicator = () => {
  return (
    <LoadingWrapper>
      <ActivityIndicator animating={true} color={MD2Colors.blue400} size={50} />
    </LoadingWrapper>
  );
};

export default LoadingIndicator;
