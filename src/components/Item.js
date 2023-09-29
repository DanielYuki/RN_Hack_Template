import { View, Text, Pressable, Image } from "react-native";

export default function Item({ course, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <View
                key={course.id}
                className="bg-white rounded-lg shadow-md m-[2vh] w-full hover:bg-[#f6f6f6] transition duration-600 ease-in-out"
            >
                <Image src={course.cover} alt={course.title} className="w-full h-[20vh] object-cover mb-[2vh] rounded-tr-lg rounded-tl-lg" />
                <Text className="m-[1.5vh] text-sencondary-color text-fl font-semibold ">
                    {course.title}
                </Text>
                <Text className="text-gray-600 text-fs m-[2vh]">
                    {course.description}
                </Text>
            </View>
        </Pressable>
    );
}
