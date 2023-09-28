import { View, Text, Button } from "react-native";

export default function Authentication({ navigation }) {
    return (
        <View className="flex-1 items-center justify-center">
            <Text>Authentication</Text>
            <Button
                title="Next screen"
                onPress={() =>
                    navigation.navigate("BottomTab", {
                        name: "Bottom Tab",
                    })
                }
            />
        </View>
    );
}
