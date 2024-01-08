import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./screens/HomePage";
import Landing from "./screens/Landing";
import CartPage from "./screens/CartPage";
import CartContextProvider from "./context/CartContext";
import ScannerPage from "./screens/ScannerPage";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <CartContextProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Scanner" component={ScannerPage} />
          <Stack.Screen
            name="Cart"
            component={CartPage}
            options={{ headerShown: true, headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </CartContextProvider>
    </NavigationContainer>
  );
};

export default Navigator;
