import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, Pressable } from "react-native";

interface BackButtonProps {
  onPress: () => void;
}

const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <Pressable onPress={onPress} className="w-[64px] flex-row justify-start items-center top-5">
      <Feather name="chevron-left" size={24} color="#fb923c" />

      <Text className="text-base font-normal not-italic text-orange-400 underline">Back</Text>
    </Pressable>
  );
};

export { BackButton };
