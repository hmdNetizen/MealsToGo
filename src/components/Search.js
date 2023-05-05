import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { spacing } from "../utils/spacing";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
        elevation={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: spacing.md,
  },
  text: {
    color: colors.white,
  },
  searchContainer: {
    padding: spacing.md,
  },
  search: {
    borderRadius: 5,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: -1,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
});

export default Search;
