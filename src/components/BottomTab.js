import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../pages/Home";
import Info from "../pages/Info";
import Settings from "../pages/Settings";
import Account from "../pages/Account";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#3F72AF"
            inactiveColor="#112D4E"
            shifting={true}
            // labeled={true}
            barStyle={{ backgroundColor: "#DBE2EF" }}
            // barStyle={{ paddingBottom: 48 }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarColor: "blue",
                    // tabBarBadge: true,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    tabBarLabel: "Info",
                    tabBarColor: "red",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="information"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: "Settings",
                    tabBarColor: "green",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="cog"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: "Account",
                    tabBarColor: "yellow",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
