import React from "react";
import { View, Text } from "react-native";

import { usePlatform } from "@/hooks";

type ToastMessageProps = {
  message?: string;
  open: boolean;
  bgColor?: string;
  textColor?: string;
  title?: string;
};

const ToastMessage = ({
  bgColor = "bg-orange-500",
  message = "",
  open = false,
  textColor = "text-orange-500",
  title,
}: ToastMessageProps) => {
  const { isWeb } = usePlatform();

  if (!open) return;

  return (
    <View className={`${isWeb ? "motion-safe:animate-bounce" : ""} w-full shadow-md ${bgColor} p-3 absolute bottom-0`}>
      <Text className={`text-base font-medium not-italic ${textColor} mb-2`}>{title}</Text>

      {message !== "" && <Text className="text-sm font-normal not-italic text-orange-300">{message}</Text>}
    </View>
  );
};

export { ToastMessage };
