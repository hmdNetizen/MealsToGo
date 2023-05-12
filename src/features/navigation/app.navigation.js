import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapScreen from "../map/screens/map.screen";

import RestaurantsNavigator from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "ios-restaurant",
  Map: "ios-map",
  Settings: "ios-settings",
};

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ focused, color, size }) => {
      return (
        <Ionicons
          name={focused ? iconName : `${iconName}-outline`}
          size={size}
          color={color}
        />
      );
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
