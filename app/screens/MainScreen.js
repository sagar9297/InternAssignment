import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";

import CarouselCards from "../Components/CarouselCards";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import AppButton from "../Components/AppButton";
import buttons from "../data/dummyButtons";
import DiscountScreen from "./DiscountScreen";

function MainScreen(props) {
  const renderButton = ({ item }) => {
    return (
      <View style={styles.buttonContainer}>
        <AppButton title={item.title} color="light" />
      </View>
    );
  };

  return (
    <Screen>
      <>
        <View style={styles.mainContainer}>
          <View style={styles.container1}>
            <Text style={styles.title}>Jane Doe</Text>
            <Text style={styles.subtitle}>4 items in cart</Text>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: "https://st.depositphotos.com/2130371/3601/v/950/depositphotos_36013115-stock-illustration-a-girl-head-silhouette-vector.jpg",
            }}
          />
        </View>
        <View style={styles.carouselContainer}>
          <CarouselCards />
        </View>
        <View style={{ marginLeft: 15 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={buttons}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderButton}
          />
        </View>
        <DiscountScreen />
      </>
    </Screen>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    flexDirection: "row",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  carouselContainer: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 10,
  },
  title: { fontSize: 28, fontWeight: "900" },
  subtitle: { fontSize: 15, color: "#ccc" },
});

export default MainScreen;
