import React, { useState } from "react";
import RestaurantInfoCard from "../components/restaurant.info-card.component";
import { List } from "react-native-paper";
// import { SafeArea } from "../../../components/utilities/safearea.component";

const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    // <SafeArea>
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      ></List.Accordion>
      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!breakfastExpanded)}
      ></List.Accordion>
      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!breakfastExpanded)}
      ></List.Accordion>
      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="cup" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!breakfastExpanded)}
      ></List.Accordion>
    </>
    // </SafeArea>
  );
};

export default RestaurantDetailsScreen;
