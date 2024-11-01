import React, { useMemo } from "react";
import { View, Text } from "react-native";

import { usePlatform } from "@/hooks";
import { ToastFilterErrorMessageType } from "@/types";

type ToastMessageProps = {
  formErrors?: ToastFilterErrorMessageType;
  message?: string;
  open: boolean;
  bgColor?: string;
  textColor?: string;
  title?: string;
};

const ToastMessage = ({
  bgColor = "bg-orange-500",
  formErrors,
  message = "",
  open = false,
  textColor = "text-orange-500",
  title,
}: ToastMessageProps) => {
  const { isWeb } = usePlatform();

  let formErrorTitle = useMemo(() => {
    if (formErrors !== undefined && Object.keys(formErrors).length !== 0) {
      if (formErrors?.firstName) {
        return formErrors.firstName;
      }

      if (formErrors?.lastName) {
        return formErrors.lastName;
      }

      if (formErrors?.address_1) {
        return formErrors.address_1;
      }

      if (formErrors?.dob) {
        return formErrors.dob;
      }

      if (formErrors?.phone) {
        return formErrors.phone;
      }

      if (formErrors?.maritialStatus) {
        return formErrors.maritialStatus;
      }
      if (formErrors?.spouseName) {
        return formErrors.spouseName;
      }
      if (formErrors?.kidsStatus) {
        return formErrors.kidsStatus;
      }
      if (formErrors?.numberOfKids) {
        return formErrors?.numberOfKids;
      }
    }
  }, [formErrors]);

  if (!open) return;

  return (
    <View className={`${isWeb ? "motion-safe:animate-bounce" : ""} w-full shadow-md ${bgColor} p-3 absolute bottom-0`}>
      <Text className={`text-base font-medium not-italic ${textColor} mb-2`}>{formErrorTitle || title}</Text>

      {message !== "" && <Text className="text-sm font-normal not-italic text-orange-300">{message}</Text>}
    </View>
  );
};

export { ToastMessage };
