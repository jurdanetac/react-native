import React from "react";
import PropTypes from "prop-types";
import { Image, Text, View, StyleSheet } from "react-native";

const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = item;

  const styles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
    },
  });

  return (
    <View>
      <Image source={{ uri: ownerAvatarUrl }} style={styles.image}></Image>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};
RepositoryItem.propTypes = {
  item: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    stargazersCount: PropTypes.number.isRequired,
    forksCount: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    ratingAverage: PropTypes.number.isRequired,
  }).isRequired,
};

export default RepositoryItem;
