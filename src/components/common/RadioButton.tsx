import React from "react";
import { GestureResponderEvent, Pressable, Text, View } from "react-native";

interface RadioButtonProps {
  onPress: (val: GestureResponderEvent) => void;
  selected: string;
  title: string;
}

const RadioButton = ({ onPress, selected, title }: RadioButtonProps) => {
  return (
    <Pressable className="flex-row justify-between gap-2 items-center" onPress={onPress}>
      <Text className="font-normal text-sm text-black">{title}</Text>

      <View className="w-6 h-6 border-[1px] flex items-center justify-center rounded-full border-orange-400 ">
        {selected === title && <View className="w-4 h-4 rounded-full bg-orange-400" />}
      </View>
    </Pressable>
  );
};

export { RadioButton };
