import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { height, primaryColor, secondaryColor, width } from "../constants";

const Landing = ({ navigation }) => {
  return (
    <View className="flex-1">
      <View
        className="justify-center items-center"
        style={{ height: height * 0.5, backgroundColor: secondaryColor }}
      >
        <Image
          source={require("../assets/landing.jpg")}
          style={{ height: height * 0.3, width: width * 0.6 }}
          className="rounded-full"
          resizeMode="cover"
        />
      </View>
      <SafeAreaView className="flex-1">
        <View className="my-3 justify-around flex-1 items-center px-3">
          <View>
            <Text className="font-semibold text-2xl text-center">
              Maximize Efficiency and Drive Business Growth.
            </Text>
            <Text className="text-center my-2 text-gray-600 text-sm">
              Our POS app offers a comprehensive suite of features that
              streamline your operations and empower you to take control.
            </Text>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: primaryColor }}
            className="p-4 w-full justify-center items-center rounded-full"
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="text-white">Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Landing;
