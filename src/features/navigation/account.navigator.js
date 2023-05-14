import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../account/screens/account.screen";
import LoginScreen from "../account/screens/login.screen";
import RegisterScreen from "../account/screens/register.screen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={AccountScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
