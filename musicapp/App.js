// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./navigation/TabNavigator";
import { FavoritesProvider } from "./context/FavoritesContext";
import { PlayerProvider } from "./context/PlayerContext";
import FeedbackScreen from "./screens/FeedbackScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <PlayerProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            {/* Main Tabs */}
            <Stack.Screen name="HomeTabs" component={TabNavigator} />

            {/* Feedback screen */}
            <Stack.Screen name="Feedback" component={FeedbackScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </PlayerProvider>
    </FavoritesProvider>
  );
}
