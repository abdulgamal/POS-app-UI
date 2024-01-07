import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigator from "./Navigator";

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}
