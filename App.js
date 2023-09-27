import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import Home from "./src/pages/Home";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Open up App.js to start working on your app!</Text>
			<Home />
            <StatusBar style="auto" />
        </View>
    );
}
