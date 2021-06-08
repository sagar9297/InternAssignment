import React from "react";
import { Text } from "react-native";

function AppText({ children, style, ...otherprops }) {
  return (
    <Text style={[style]} {...otherprops}>
      {children}
    </Text>
  );
}

export default AppText;
