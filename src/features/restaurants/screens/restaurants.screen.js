import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import List from "../../../components/List";
import Search from "../../../components/Search";
import { colors } from "../../../utils/colors";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <List />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
});

export default RestaurantScreen;
