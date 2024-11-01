import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

const Header = () => {
  const router = useRouter();

  const onContactUs = () => {
    router.push("/(public)/contact-us");
  };

  return (
    <View className="bg-orange-50 flex-row justify-end items-center w-full h-10">
      <Pressable onPress={onContactUs}>
        <Text className="px-10 text-orange-400 text-lg font-medium not-italic text-right">Contact Us</Text>
      </Pressable>
    </View>
  );
};

export { Header };
