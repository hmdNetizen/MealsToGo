import React, { useContext, useState } from "react";
import RestaurantInfoCard from "../components/restaurant.info-card.component";
import Spacer from "../components/spacer/spacer.component";
import Search from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import LoadingIndicator from "../components/utilities/LoadingIndicator.component";
import { SafeArea } from "../../../components/utilities/safearea.component";
import { FavoriteContext } from "../../../services/favorites/favorites.context";
import FavoritesBar from "../../../components/favorites/favorites-bar.component";
import { RestaurantList } from "../components/restaurants-list.component";
import FadeInView from "../../../components/animations/fade.animation";
import { TouchableOpacity } from "react-native";

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoriteContext);

  const [toggle, setToggle] = useState(false);

  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <Search
        isFavoriteToggled={toggle}
        onFavoriteToggled={() => setToggle(!toggle)}
      />
      {toggle && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <Spacer position="bottom" size="large">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetails", {
                      restaurant: item,
                    })
                  }
                >
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </TouchableOpacity>
              </Spacer>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantScreen;
