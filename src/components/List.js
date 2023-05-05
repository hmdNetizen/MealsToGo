import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { spacing } from "../utils/spacing";

const List = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    padding: spacing.md,
  },
  text: {
    color: colors.white,
  },
});

export default List;
