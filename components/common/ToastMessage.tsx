import React, { useMemo } from "react";
import { View, Text } from "react-native";

import { usePlatform } from "@/hooks";

type ToastMessageProps = {
  message?: string;
  open: boolean;
  title?: string;
};

const ToastMessage = ({ message = "", open = false, title }: ToastMessageProps) => {
  const { isWeb } = usePlatform();

  let isOpen = useMemo(() => open, [open]);

  if (!isOpen) return;

  return (
    <View className={`${isWeb ? "motion-safe:animate-bounce" : ""} w-full shadow-md bg-red-50 p-3 absolute bottom-0`}>
      <Text className={`text-base font-medium not-italic text-red-500 mb-2`}>{title}</Text>

      {message !== "" && <Text className="text-sm font-normal not-italic text-red-500">{message}</Text>}
    </View>
  );
};

export { ToastMessage };
