import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, price, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppText style={styles.subTitle}>
              ${price}
              <Text style={styles.innerText}> 80</Text>
            </AppText>
            <View style={styles.discountAmt}>
              <Text style={{ color: colors.white }}>-70$</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.light,
    overflow: "hidden",
    width: 150,
    height: 150,
  },
  detailsContainer: {
    padding: 5,
  },
  discountAmt: {
    height: 20,
    width: 35,
    backgroundColor: colors.black,
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 3,
  },
  innerText: {
    color: colors.black,
    textDecorationLine: "line-through",
    textDecorationStyle: "dashed",
    textDecorationColor: colors.black,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 100,
  },
  subTitle: {
    color: "#FFC300",
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    color: colors.medium,
    fontSize: 15,
  },
});

export default Card;
