import React from "react";
import { Button, Card as ElCard, Icon, Text } from "react-native-elements";
const urlImage =
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

export const Card = () => (
  <ElCard>
    <ElCard.Title>Not my bedroom</ElCard.Title>
    <ElCard.Divider />
    <ElCard.Image source={{ uri: urlImage }} />
    <Text style={{ marginBottom: 10 }}>
      But it is a lovely room, worthy of a short description... in the
      description space! 😎
    </Text>
    <Button
      icon={<Icon iconStyle={{ color: "white" }} name="code" />}
      title="MORE INFO"
    />
  </ElCard>
);
