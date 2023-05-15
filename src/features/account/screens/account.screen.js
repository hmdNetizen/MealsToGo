import React from "react";
import LottieView from "lottie-react-native";
import Spacer from "../../restaurants/components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountOverlay,
  AnimationWrapper,
  AuthButton,
  Title,
} from "../components/account.styles";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountOverlay />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/waitermelon.json")}
        />
      </AnimationWrapper>
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
