import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../Components/Screen";
import CardListItem from "../Components/CardListItem";

function DiscountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>Discounts</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("On the next page....")}>
          <View style={styles.container2}>
            <Text style={styles.text}>View all</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            />
          </View>
        </TouchableOpacity>
      </View>
      <CardListItem />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 20,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default DiscountScreen;
