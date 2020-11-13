import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Clear:{
        iconName:"weather-sunny",
        colors:["#f2ba00","#E4E5E6"],
        text:"what a wonderful sunny day"
    },
    Clouds:{
        iconName:"cloud",
        colors:["#00416A","#E4E5E6"],
        text:"It's clouds today.."
    },
    "Thunderstorm":{
        iconName:"",
        colors:[],
        text:""
    },
    "Drizzle":{
        iconName:"",
        colors:[],
        text:""
    },
    "Rain":{
        iconName:"",
        colors:[],
        text:""
    },
    "Snow":{
        iconName:"",
        colors:[],
        text:""
    },
    "Atmosphere":{
        iconName:"",
        colors:[],
        text:""
    }
}

export default function Weather({ temp, condition}) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions[condition].colors}
      style={styles.container}
    >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons
            name={weatherOptions[condition].iconName}
            size={96}
            color="white"
            />
            <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.halfContainer}>
            <Text style={styles.text}>{weatherOptions[condition].text}</Text>
        </View>
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
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    //   backgroundColor:"blue",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  text:{
      color:"white",
      fontSize:20
  }
});
