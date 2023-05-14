import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountOverlay,
  AuthButton,
} from "../components/account.styles";

const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountOverlay />
      <AccountContainer>
        <AuthButton
          icon="lock"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
