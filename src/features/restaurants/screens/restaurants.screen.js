import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "react-native";
import Search from "../../../components/Search";
import { colors } from "../../../utils/colors";
import { spacing } from "../../../utils/spacing";
import RestaurantInfo from "../components/restaurant.info.component";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
  list: {
    padding: spacing.md,
  },
});

export default RestaurantScreen;
