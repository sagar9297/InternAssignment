import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary", style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    height: "7%",
  },
  text: {
    color: colors.black,
    fontSize: 18,
  },
});

export default AppButton;
