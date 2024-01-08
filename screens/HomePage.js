import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  categories,
  data,
  height,
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "../constants";
import * as Icons from "react-native-heroicons/solid";
import OrderCard from "../components/OrderCard";
import Card from "../components/Card";
import FilterCard from "../components/FilterCard";
import { CartContext } from "../context/CartContext";

const HomePage = ({ navigation }) => {
  const [filterValue, setFilterValue] = useState(categories[0]);
  const [filterdData, setFilterdData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");
  const { cartStore, addToCart } = useContext(CartContext);

  useEffect(() => {
    if (query) {
      const filterData = () =>
        data.filter((val) =>
          val.title.toLowerCase().includes(query.toLowerCase())
        );
      setFilterdData(filterData);
    } else {
      const filterData = () =>
        data.filter((val) => val.category == filterValue);
      setFilterdData(filterData);
    }
  }, [filterValue, query]);

  return (
    <View className="flex-1 relative">
      <View
        style={{ height: height * 0.31, backgroundColor: secondaryColor }}
        className="px-3 mt-2"
      >
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <Text className="font-semibold">Tamacti Jun</Text>
              <View
                style={{ backgroundColor: tertiaryColor }}
                className="px-4 py-1 rounded-full"
              >
                <Text style={{ color: primaryColor }} className="text-xs">
                  Waiter
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{ backgroundColor: tertiaryColor }}
              className="p-2 rounded-full"
            >
              <Icons.ArrowLeftStartOnRectangleIcon size={24} color={"gray"} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View className="mt-4 px-3 flex-row items-center justify-between space-x-3">
          <View className="bg-white flex-1 flex-row items-center p-1 rounded-full px-3">
            <TextInput
              onChangeText={setSearchValue}
              placeholder="Search Item"
              className="flex-1"
            />
            <TouchableOpacity onPress={() => setQuery(searchValue)}>
              <Icons.MagnifyingGlassIcon
                size={20}
                color={"gray"}
                className="ml-2"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="bg-white px-5 py-1.5 rounded-full"
            onPress={() => navigation.navigate("Scanner")}
          >
            <Icons.QrCodeIcon size={20} color={"gray"} />
          </TouchableOpacity>
        </View>
        <View className="mt-6 px-3">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <OrderCard
              name="Joseey"
              orderId="#2140"
              location={"In Person"}
              count="3"
            />
            <OrderCard
              name="Collins"
              orderId="#2120"
              location={"In Person"}
              count="2"
            />
            <OrderCard
              name="Expert"
              orderId="#2145"
              location={"Online"}
              count="5"
            />
            <OrderCard
              name="Mitch"
              orderId="#2140"
              location={"In Person"}
              count="4"
            />
            <OrderCard
              name="Moe"
              orderId="#2142"
              location={"Online"}
              count="4"
            />
          </ScrollView>
        </View>
      </View>
      <View className="flex-1 pt-1 px-3 pb-3">
        <View className="my-3">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((val, i) => (
              <FilterCard
                title={val}
                key={i}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            ))}
          </ScrollView>
        </View>
        <SafeAreaView className="flex-1">
          <ScrollView showsVerticalScrollIndicator={false}>
            {filterdData.map((val, i) => (
              <Card item={val} key={i} addItem={addToCart} />
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
      {cartStore.length > 0 && (
        <TouchableOpacity
          style={{ backgroundColor: primaryColor }}
          className="flex-row items-center justify-between p-3 rounded-full absolute bottom-10 w-[80%] self-center"
          onPress={() => navigation.navigate("Cart")}
        >
          <Text className="text-white text-xs">Proceed New Order</Text>
          <Text className="text-white text-xs">{cartStore.length} Items</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomePage;
