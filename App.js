import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Authentication from "./src/pages/Authentication";
import BottomTab from "./src/components/BottomTab";
import Header from "./src/components/Header";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

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
                    options={{
                        headerTitle: "Header Title",
                        headerBackButtonMenuEnabled: false,
                        headerBackVisible: false,
                        headerTitleAlign: "center",
                    }}
                />
                {/* <BottomTab Home={Home} Info={Info} Settings={Settings} Account={Account} /> */}
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
