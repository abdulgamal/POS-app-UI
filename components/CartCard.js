import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";

const CartCard = ({ url, title }) => {
  return (
    <View className="p-3 rounded-xl border border-gray-200 flex-row items-center justify-between mb-4">
      <View className="flex-row items-center space-x-2">
        <Image
          source={{
            uri: url,
          }}
          resizeMode="cover"
          className="h-14 w-14 rounded-md"
        />
        <Text className="text-gray-400 font-semibold">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <TouchableOpacity className="p-1 border border-gray-300 rounded-full">
          <Icons.MinusIcon size={18} color={"gray"} />
        </TouchableOpacity>
        <Text>1</Text>
        <TouchableOpacity className="p-1 border border-gray-300 rounded-full">
          <Icons.PlusIcon size={18} color={"gray"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;
