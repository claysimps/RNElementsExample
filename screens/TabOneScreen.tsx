import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Icon, Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "../components/Card";
import { IconsExample } from "../components/IconExample";

import { View } from "../components/Themed";

const avatarUrl =
  "https://images.unsplash.com/photo-1600767209975-aa344d33d4e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          type="outline"
          buttonStyle={{ backgroundColor: "transparent" }}
          title="Outline"
        />
        <Button type="clear" title="Clear" />
        <Button title="Default" />
        <Text>Base Style</Text>
        <Text h1>h1 Text component</Text>
        <Text h2>h2 Text component</Text>
        <Text h3>h3 Text component</Text>
        <IconsExample />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
