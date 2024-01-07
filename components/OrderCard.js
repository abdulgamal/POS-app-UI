import { View, Text } from "react-native";
import React from "react";
import { primaryColor, secondaryColor, width } from "../constants";
import * as Icons from "react-native-heroicons/solid";

const OrderCard = ({ name, orderId, location, count }) => {
  return (
    <View
      className="bg-white p-3 rounded-lg border border-gray-100 mr-3"
      style={{ width: width * 0.5 }}
    >
      <View className="flex-row items-center justify-between">
        <View
          style={{ backgroundColor: secondaryColor }}
          className="p-1 rounded-full px-3"
        >
          <Text className="text-[10px]" style={{ color: primaryColor }}>
            Recent Order
          </Text>
        </View>
        <Text className="text-xs text-gray-500 font-semibold">{orderId}</Text>
      </View>
      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-row items-center space-x-1">
          <Icons.UserIcon size={18} color={"gray"} />
          <Text className="text-gray-600 font-bold">{name}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Icons.MapPinIcon size={18} color={"gray"} />
          <Text className="text-gray-600 text-xs font-bold">{location}</Text>
        </View>
      </View>
      <Text className="text-xs text-gray-500 mt-2">{count} Items</Text>
    </View>
  );
};

export default OrderCard;
