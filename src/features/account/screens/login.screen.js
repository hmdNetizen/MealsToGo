import React, { useContext, useState } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Spacer from "../../restaurants/components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountOverlay,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../restaurants/components/typography/text.component";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  const handleLogin = () => {
    onLogin(email, password);
  };

  return (
    <AccountBackground>
      <AccountOverlay />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(userEmail) => setEmail(userEmail)}
        />

        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry={!showPassword ? true : false}
            autoCapitalize="none"
            right={
              <AuthInput.Icon
                icon={!showPassword ? "eye" : "eye-off"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            onChangeText={(pass) => setPassword(pass)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={handleLogin}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default LoginScreen;
