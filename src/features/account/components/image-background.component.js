import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const StyledImageBackground = styled(ImageBackground)`
flex: 1,
justifyContent: "center",
`;

const AccountImageBackground = ({ image, children }) => {
  return (
    <Container>
      <StyledImageBackground source={{ uri: image }} resizeMode="cover">
        {children}
      </StyledImageBackground>
    </Container>
  );
};

export default AccountImageBackground;
