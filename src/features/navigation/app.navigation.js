import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import MapScreen from "../map/screens/map.screen";

import RestaurantsNavigator from "./restaurants.navigator";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { FavoriteContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import SettingsNavigator from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "ios-restaurant",
  Map: "ios-map",
  Settings: "ios-settings",
};

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
    <FavoriteContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
            <Tab.Screen
              name="Settings"
              component={SettingsNavigator}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoriteContextProvider>
  );
};

export default Navigation;
