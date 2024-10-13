import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

const Hirerarchy = () => {
  const router = useRouter();

  const onBack = () => {
    router.navigate("/dashboard");
  };

  return (
    <View>
      <Pressable onPress={onBack} className="ml-10 mt-10">
        <Text>Back</Text>
      </Pressable>

      <Text>Hirerarchy</Text>
    </View>
  );
};

export default Hirerarchy;
