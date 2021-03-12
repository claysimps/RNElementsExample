import React from "react";
import { Input, Icon } from "react-native-elements";

export const InputExample = () => (
  <>
    <Input
      placeholder="Email"
      label="What's your email address?"
      leftIcon={<Icon size={24} name="email" />}
      errorMessage="I pop up when something goes wrong"
    />
    <Input
      label="Type it, don't tell me"
      placeholder="Password"
      leftIcon={{ name: "lock", size: 24, color: "purple" }}
      secureTextEntry
      inputContainerStyle={{ borderBottomColor: "red" }}
      labelStyle={{ color: "orange" }}
      placeholderTextColor="blue"
      errorMessage="I pop up when something goes wrong"
    />
  </>
);
