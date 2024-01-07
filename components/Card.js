import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Card = ({ item }) => {
  return (
    <View className="p-3 rounded-xl border border-gray-200 flex-row items-center justify-between mb-4">
      <View className="flex-row items-center space-x-2">
        <Image
          source={{
            uri: item?.image_url,
          }}
          resizeMode="cover"
          className="h-14 w-14 rounded-md"
        />
        <Text className="text-gray-400 font-semibold">{item?.title}</Text>
      </View>
      <Text className="text-gray-500 font-bold">Ksh. {item?.price * 100}</Text>
    </View>
  );
};

export default Card;
