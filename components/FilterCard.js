import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { primaryColor, tertiaryColor, width } from "../constants";

const FilterCard = ({ title, filterValue, setFilterValue }) => {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.3,
        backgroundColor: filterValue == title ? tertiaryColor : "transparent",
      }}
      onPress={() => setFilterValue(title)}
      className="h-10 px-2 justify-center items-center border border-gray-200 rounded-lg mr-3"
    >
      <Text
        style={{
          color: filterValue == title ? primaryColor : "gray",
        }}
        className="text-xs font-semibold text-gray-500"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterCard;
