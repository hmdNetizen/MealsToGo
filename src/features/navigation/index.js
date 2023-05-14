import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import Navigation from "./app.navigation";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./account.navigator";

const AppNavigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <Navigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
