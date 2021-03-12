import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

const theme = {
  Text: {
    h1Style: {
      color: "black",
    },
    h2Style: {
      color: "blue",
    },
    h3Style: {
      color: "green",
    },
    style: {
      fontSize: 14,
    },
  },
  Button: {
    containerStyle: {
      margin: 5,
    },
    buttonStyle: {
      width: "100%",
      borderRadius: 35,
      // * First button example
      // backgroundColor: "green",
    },
    titleStyle: {
      // * First button example
      // color: "red",
    },
  },
  Avatar: {
    rounded: true,
    containerStyle: {
      margin: 10,
    },
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Navigation colorScheme={colorScheme} />
        </ThemeProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
