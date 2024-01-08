import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { height, primaryColor, secondaryColor } from "../constants";
import CartCard from "../components/CartCard";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartStore, addToCart, totalPrice, removeFromCart } =
    useContext(CartContext);
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-3">
        <Text className="font-bold text-xl">Items</Text>
        <View className="flex-1 my-3">
          <ScrollView showsVerticalScrollIndicator={false}>
            {cartStore.map((item, i) => (
              <CartCard
                key={i}
                item={item}
                addItem={addToCart}
                removeItem={removeFromCart}
              />
            ))}
          </ScrollView>
        </View>
        <View
          style={{ height: height * 0.3, backgroundColor: secondaryColor }}
          className="p-4 justify-between"
        >
          <View className="border border-gray-200 p-2 rounded-xl">
            <View className="border-b border-gray-200 mb-2">
              <Text className="font-bold text-base">Details</Text>
            </View>
            <View className="my-1 flex-row items-center justify-between">
              <Text className="text-gray-500">Subtotal</Text>
              <Text className="text-gray-500 font-semibold">
                Ksh. {totalPrice}
              </Text>
            </View>
            <View className="my-1 flex-row items-center justify-between">
              <Text className="text-gray-500">Tax</Text>
              <Text className="text-gray-500 font-semibold">Ksh. 0</Text>
            </View>
            <View className="my-1 flex-row items-center justify-between">
              <Text className="text-gray-500">Total</Text>
              <Text className="text-gray-700 font-bold">Ksh. {totalPrice}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: primaryColor }}
            className="p-3 rounded-full justify-center items-center"
          >
            <Text className="text-white">Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartPage;
