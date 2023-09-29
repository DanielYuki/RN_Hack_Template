import { View, Text, Image, Button, Pressable, FlatList } from "react-native";
import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Item from "../components/Item";

const Stack = createNativeStackNavigator();

export default function Info({ navigation }) {
    const InfoPage = ({ navigation }) => {
        return (
            <View className="flex-1 w-[100vw] items-center justify-center">
                <Text>Info Page</Text>
                <FlatList
                    className="flex-1 w-full pr-4"
                    data={courses}
                    renderItem={({ item }) => (
                        <Item
                            course={item}
                            onPress={() => navigation.navigate(item.title)}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    /* ...other FlatList props */
                />
            </View>
        );
    };

    const [courses, setCourses] = React.useState([
        {
            id: 1,
            title: "Course1",
            description: "Course 1 description",
            cover: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            id: 2,
            title: "Course2",
            description: "Course 2 description",
            cover: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            id: 3,
            title: "Course3",
            description: "Course 3 description",
            cover: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            id: 4,
            title: "Course4",
            description: "Course 4 description",
            cover: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            id: 5,
            title: "Course5",
            description: "Course 5 description",
            cover: "https://picsum.photos/seed/picsum/200/300",
        },
    ]);

    const coursesElementsRn = courses.map((course) => (
        <Stack.Screen
            name={course.title}
            options={{
                Animation: "slide_from_right",
                presentation: "card",
            }}
        >
            {({ navigation }) => (
                <View
                    key={course.id}
                    className="bg-white rounded-lg shadow-md m-[2vh] w-[30%] max-w-md min-w-[12rem] hover:bg-[#f6f6f6] transition duration-600 ease-in-out"
                >
                    <Image
                        src={course.cover}
                        alt={course.title}
                        className="w-full h-[20vh] object-cover mb-[2vh] rounded-tr-lg rounded-tl-lg"
                    />
                    <Text className="m-[1.5vh] text-sencondary-color text-fl font-semibold ">
                        {course.title}
                    </Text>
                    <Text className="text-gray-600 text-fs m-[2vh]">
                        {course.description}
                    </Text>
                    <Button
                        title="Go back"
                        onPress={() => navigation.goBack()}
                    />
                </View>
            )}
        </Stack.Screen>
    ));

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="InfoPage"
                // initialParams={{
                //     courses,
                //     onCoursePress: (title) => navigation.navigate(title),
                // }}
                component={InfoPage}
                // options={{
                //     headerShown: false,
                // }}
            />
            {courses.length ? coursesElementsRn : null}
        </Stack.Navigator>
    );
}
