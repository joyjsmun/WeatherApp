import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>29</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </ScrollView>
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
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 40,
    fontSize: 160,
  },
  desc: { fontSize: 40, marginTop: -20 },
});
