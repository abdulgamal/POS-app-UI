import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";

const CartCard = ({ item, addItem, removeItem }) => {
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
      <View className="flex-row items-center space-x-2">
        <TouchableOpacity
          className="p-1 border border-gray-300 rounded-full"
          onPress={() => removeItem(item)}
        >
          <Icons.MinusIcon size={18} color={"gray"} />
        </TouchableOpacity>
        <Text>{item?.qty}</Text>
        <TouchableOpacity
          className="p-1 border border-gray-300 rounded-full"
          onPress={() => addItem(item)}
        >
          <Icons.PlusIcon size={18} color={"gray"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;
