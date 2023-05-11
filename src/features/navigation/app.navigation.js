import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import RestaurantScreen from "../restaurants/screens/restaurants.screen";

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

function MapScreen() {
  return (
    <View>
      <Text>Map!</Text>
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
        <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
