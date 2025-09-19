import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import TabNavigator, { TabParamList } from "./navigation/TabNavigator";
import BookingScreen from "./screen/BookingScreen";
import CartScreen from "./screen/CartScreen";
import HelperDashboardScreen from "./screen/HelperDashboardScreen";
import LoginScreen from "./screen/LoginScreen";
import MatchingScreen from "./screen/MatchingScreen";
import SplashScreen from "./screen/SplashScreen";

export type RootStackParamList = {
  Login: undefined;
  Main:
    | { initialTab?: string; ShopTab?: { initialCategory: string } }
    | undefined;
  Shop: { category: string };
  Cart: { cartItems: any[]; setCart: (cart: any[]) => void };
  HelperDashboard: undefined;
  MatchingScreen: undefined;
  Booking: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main">
        {({ route }) => (
          <TabNavigator
            initialTab={route.params?.initialTab as keyof TabParamList}
            shopTabParams={route.params?.ShopTab}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="HelperDashboard" component={HelperDashboardScreen} />
      <Stack.Screen name="MatchingScreen" component={MatchingScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
    </Stack.Navigator>
  );
}
