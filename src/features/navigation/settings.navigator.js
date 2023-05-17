import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="favorites" component={() => null} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
