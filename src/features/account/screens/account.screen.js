import React from "react";
import Spacer from "../../restaurants/components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountOverlay,
  AuthButton,
  Title,
} from "../components/account.styles";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountOverlay />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
