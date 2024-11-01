import React, { RefObject, useState } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  editable?: boolean;
  error?: string;
  inputRef?: RefObject<TextInput> | null | undefined;
  label: string;
  note?: string;
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
  editable = true,
  error = "",
  label,
  placeholder,
  note = "",
  onChangeText,
  value,
  required,
  returnKeyType = "done",
  inputRef,
  ...props
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View className="mb-6">
      <View className="flex-row justify-start items-center gap-1 mb-1">
        <Text className="font-semibold text-sm not-italic text-black">{label}</Text>

        {required ? (
          <Text className="text-red-400 font-semibold text-xl not-italic">*</Text>
        ) : (
          <Text className="text-slate-400 font-normal text-sm not-italic">(Optional)</Text>
        )}
      </View>

      {note ? <Text className="text-xs font-medium text-orange-400 mb-2 italic">{note}</Text> : null}

      <TextInput
        ref={inputRef}
        editable={editable}
        className={`h-10 border-1 pl-3 text-sm ${isFocus ? "not-italic" : "italic"} font-normal ${editable ? "text-black" : "text-slate-600"} bg-slate-50 border-[1px] border-slate-300 rounded-lg`}
        onFocus={({ nativeEvent }) => setIsFocus(typeof nativeEvent?.target === "number" ? true : false)}
        placeholderTextColor="#94a3b8"
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />

      {error ? <Text className="text-sm pl-2 font-normal not-italic text-red-600">{error}</Text> : null}
    </View>
  );
};

export { Input };
