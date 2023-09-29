import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Authentication from "./src/pages/Authentication";
import BottomTab from "./src/components/BottomTab";
import Header from "./src/components/Header";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Home" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    switch (routeName) {
        case "Home":
            return "Home title";
        case "Info":
            return "Info Title";
        case "Settings":
            return "Settings Title";
        case "Account":
            return "account title";
    }
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Authentication"
                    component={Authentication}
                    options={{
                        headerShown: false,
                    }}
                />
                {/* <Header /> */}
                <Stack.Screen
                    name="BottomTab"
                    component={BottomTab}
                    options={({ route }) => ({
                        headerTitle: "Header Title",
                        headerBackButtonMenuEnabled: false,
                        headerBackVisible: false,
                        headerTitleAlign: "center",
                        animation: "simple_push",
                        headerTitle: getHeaderTitle(route),
                    })}
                />
                {/* <BottomTab Home={Home} Info={Info} Settings={Settings} Account={Account} /> */}
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
