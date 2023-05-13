import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreen from "../restaurants/screens/restaurants.screen";
import RestaurantDetailsScreen from "../restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
