import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "#ffff8f" }} />
      <View style={{ flex: 3, backgroundColor: "#ec9e69" }} />
      <View style={{ flex: 3, backgroundColor: "#d56073" }} />
      <View style={{ flex: 1, backgroundColor: "#7a4579" }} />
    </View>
  );
}

const styles = StyleSheet.create({});
