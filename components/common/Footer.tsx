import React from "react";
import { View, Text } from "react-native";

const Footer = () => {
  return (
    <View className="mt-auto bg-orange-50 flex-row justify-center items-center w-full h-14">
      <Text className="text-orange-400 text-lg font-medium not-italic text-right">
        Copyright @ 2024, All Right Reserved
      </Text>
    </View>
  );
};

export { Footer };
