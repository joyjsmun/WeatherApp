import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff8f",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
  },
  cityName: {
    color: "black",
    fontSize: 59,
    fontWeight: "600",
  },
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
    alignItems: "center",
  },
  temp: {
    marginTop: 40,
    fontSize: 160,
  },
  desc: { fontSize: 40, marginTop: -20 },
});
