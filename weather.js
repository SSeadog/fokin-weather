import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#5C258D", "#4389A2"],
  },
  Thunderstorm: {
    iconName: "",
    gradient: [],
  },
  Drizzle: {
    iconName: "",
    gradient: [],
  },
  Rain: {
    iconName: "",
    gradient: [],
  },
  Snow: {
    iconName: "",
    gradient: [],
  },
  Atmosphere: {
    iconName: "",
    gradient: [],
  },
  Clear: {
    iconName: "",
    gradient: [],
  },
  Clouds: {
    iconName: "",
    gradient: [],
  },
  Mist: {
    iconName: "",
    gradient: [],
  },
  Dust: {
    iconName: "",
    gradient: [],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName || "weather-sunset"}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfcontainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
