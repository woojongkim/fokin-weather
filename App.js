import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "d528ce6bc5c683f63a196d6ad71d183b";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const newLocal = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    console.log(newLocal);
    const {
      data: {
        main: { temp },
        weather
      },
    } = await axios.get(newLocal);
    console.log(weather[0].main);
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // Send to API and get weather!
      this.getWeather(latitude, longitude);
    } catch (err) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
