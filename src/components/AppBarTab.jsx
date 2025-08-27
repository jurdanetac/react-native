import React from "react";
import PropTypes from "prop-types";
import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ name, handlePress }) => {
  return (
    <Pressable onPress={handlePress}>
      <Text color={"primaryDark"} fontWeight={"bold"} fontSize={"subheading"}>
        {name}
      </Text>
    </Pressable>
  );
};
AppBarTab.propTypes = {
  handlePress: PropTypes.func.isRequired,
};

export default AppBarTab;
