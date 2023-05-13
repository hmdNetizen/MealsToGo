import React from "react";
import CompactRestaurantInfo from "../../../../components/restaurant/compact-restaurant-info.component";

const MapCallOut = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};

export default MapCallOut;
