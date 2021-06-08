import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../Components/Card";
import cardData from "../data/dummyCards";
import colors from "../config/colors";

function CardListItem(props) {
  const cardList = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Card title={item.title} imageUrl={item.image} price={item.price} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={cardList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: { padding: 10 },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
});

export default CardListItem;
