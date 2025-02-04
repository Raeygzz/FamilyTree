import React, { useMemo } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

interface PickerDataProps {
  id: string;
  label: string;
  value: string;
}

interface PickerProps {
  data?: PickerDataProps[];
  error?: string;
  isOpen: boolean;
  label: string;
  onClose: () => void;
  onPress: () => void;
  onSelectText: (val: PickerDataProps) => void;
  required?: boolean;
  selected?: string;
}

const Picker = ({
  data = [],
  error = "",
  isOpen = false,
  label,
  onClose,
  onPress,
  onSelectText,
  required = false,
  selected,
}: PickerProps) => {
  const pickerList = useMemo(
    () =>
      isOpen && data.length > 0
        ? data.map((obj, index) => (
            <TouchableOpacity
              key={`${obj.id}_${index}`}
              onPress={() => {
                onSelectText(obj);
                onClose?.();
              }}>
              <Text className="text-base px-3 py-2 font-normal not-italic text-black">{obj.label}</Text>
            </TouchableOpacity>
          ))
        : null,
    [isOpen, data, onSelectText, onClose],
  );

  return (
    <View className="mb-6 z-20">
      <View className="flex-row justify-start items-center gap-1">
        <Text className="font-semibold text-sm not-italic text-black">{label}</Text>

        {required ? (
          <Text className="text-red-400 font-semibold text-xl not-italic">*</Text>
        ) : (
          <Text className="text-slate-400 font-normal text-sm not-italic">(Optional)</Text>
        )}
      </View>

      <TouchableOpacity onPress={onPress} className="h-10 border-[1px] bg-slate-50 border-slate-300 rounded-lg">
        <View className="flex-row justify-between items-center h-10 px-3">
          <Text
            className={`text-sm ${selected !== "Select" ? "not-italic text-black" : "italic text-slate-400"} font-normal`}>
            {selected}
          </Text>

          <Ionicons name="chevron-down" size={24} color="black" />
        </View>
      </TouchableOpacity>

      {error ? <Text className="text-sm pl-2 font-normal not-italic text-red-600">{error}</Text> : null}

      <ScrollView className="absolute z-10 top-[60px] w-full bg-slate-50 rounded-bl-md rounded-br-md">
        {pickerList}
      </ScrollView>
    </View>
  );
};

export { Picker };
