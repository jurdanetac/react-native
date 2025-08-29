import React from "react";
import PropTypes from "prop-types";
import { Image, Text, View, StyleSheet } from "react-native";
import theme from '../theme'

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

    pictureAndInfo: {
      display: "flex",
      flexDirection: "row",
      // separation
      gap: 30
    },

    // info = repo (author and name) + description + main language 
    repoName: {
      fontWeight: "bold",
    },

    language: {
      padding: 10,
      backgroundColor: theme.colors.primary,
      maxWidth: "100%",
      borderRadius: 100
    },

    // stars...
    metadataContainer: {},
  });

  return (
    <View>
      <View style={styles.pictureAndInfo}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image}></Image>
        <View>
          <Text style={styles.repoName}>{fullName}</Text>
          <Text>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>

      {/*
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
     */}
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
