import React from "react";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

const NotFoundPage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "404 Not Found!",
          // headerBackTitleVisible: false,
        }}
      />

      <View className="flex h-full flex-col items-center justify-center py-8 gap-y-6 bg-white">
        <Text className="text-base font-semibold text-black">404 Not Found!</Text>
      </View>
    </>
  );
};

export default NotFoundPage;
