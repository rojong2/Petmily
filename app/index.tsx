import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import HelperDashboardScreen from "./screen/HelperDashboardScreen";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import MatchingScreen from "./screen/MatchingScreen";
import SplashScreen from "./screen/SplashScreen";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  HelperDashboard: undefined;
  MatchingScreen: undefined;
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HelperDashboard" component={HelperDashboardScreen} />
      <Stack.Screen name="MatchingScreen" component={MatchingScreen} />
    </Stack.Navigator>
  );
}
