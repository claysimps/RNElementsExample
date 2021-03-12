import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "../components/Card";
import { InputExample } from "../components/InputExample";
import { RatingsExample } from "../components/Ratings";
import { View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <RatingsExample />
        <Card />
        <InputExample />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  icons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    margin: 5,
  },
});
