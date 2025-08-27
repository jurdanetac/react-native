import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    // dark color for the app's bar
    backgroundColor: theme.colors.textPrimaryLight,

    // so that the stuff doesn't get under the device's top status bar
    paddingTop: Constants.statusBarHeight + 20,
    padding: 20,

    // align tabs in a row
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

const AppBar = () => {
  const handlePress = (event) => {
    console.log("tab pressed");
  };

  return (
    <View style={styles.container}>
      <AppBarTab name={"Repositories"} handlePress={handlePress} />
    </View>
  );
};

export default AppBar;
