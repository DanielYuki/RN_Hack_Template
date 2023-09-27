import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./src/pages/Home";
import Info from "./src/pages/Info";
import Settings from "./src/pages/Settings";
import Account from "./src/pages/Account";
import BottomTab from "./src/components/BottomTab";
import Header from "./src/components/Header";

// const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator> */}
			<Header />
            <BottomTab Home={Home} Info={Info} Settings={Settings} Account={Account} />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
