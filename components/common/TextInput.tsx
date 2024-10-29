import React, { RefObject, useState } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput> | null | undefined;
  label: string;
  onChangeText: (val: string) => void;
  placeholder: string;
  required?: boolean;
  returnKeyType?:
    | "done"
    | "go"
    | "next"
    | "search"
    | "send"
    | "none"
    | "previous"
    | "default"
    | "emergency-call"
    | "google"
    | "join"
    | "route"
    | "yahoo";
  value: string;
}

const Input = ({
  label,
  placeholder,
  onChangeText,
  value,
  required,
  returnKeyType = "done",
  inputRef,
  ...props
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View className="gap-y-2 mb-6">
      <View className="flex-row justify-start items-center gap-1">
        <Text className="font-semibold text-sm not-italic text-black">{label}</Text>

        {required ? (
          <Text className="text-red-400 font-semibold text-xl not-italic">*</Text>
        ) : (
          <Text className="text-slate-400 font-normal text-sm not-italic">(Optional)</Text>
        )}
      </View>

      <TextInput
        ref={inputRef}
        className={`h-10 border-1 pl-3 text-sm ${isFocus ? "not-italic" : "italic"} font-normal text-black bg-slate-50 border-[1px] border-slate-300 rounded-lg`}
        onFocus={({ nativeEvent }) => setIsFocus(typeof nativeEvent?.target === "number" ? true : false)}
        placeholderTextColor="#94a3b8"
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
    </View>
  );
};

export { Input };
