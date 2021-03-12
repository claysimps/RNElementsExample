import React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { View } from "./Themed";

export const IconsExample = () => (
  <>
    <View style={styles.icons}>
      <Icon reverse type="entypo" name="swarm" color="#ecba16" />
      <Icon
        reverse
        name="bug-report"
        color="#00aced"
        onPress={() => console.log("clicked")}
      />
      <Icon reverse name="verified" color="#51f0a4" />
    </View>
    <View style={styles.icons}>
      <Icon reverse raised type="entypo" name="swarm" color="#ecba16" />
      <Icon reverse raised name="bug-report" color="#00aced" />
      <Icon reverse raised name="verified" color="#51f0a4" />
    </View>
    <View style={styles.icons}>
      <Icon type="entypo" name="swarm" color="#ecba16" />
      <Icon name="bug-report" color="#00aced" />
      <Icon name="verified" color="#51f0a4" />
    </View>
    <View style={styles.icons}>
      <Icon raised type="entypo" name="swarm" color="#ecba16" />
      <Icon raised name="bug-report" color="#00aced" />
      <Icon raised name="verified" color="#51f0a4" />
    </View>
  </>
);

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    margin: 5,
  },
});
