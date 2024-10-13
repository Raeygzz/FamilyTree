import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

import { useAppDispatch } from "@/redux/store";
import { setIsAuthenticated } from "@/redux/features";

const Menu = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSignout = () => {
    dispatch(setIsAuthenticated(false));

    router.replace("/login");
  };

  return (
    <View>
      <Text>Menu</Text>

      <Pressable onPress={onSignout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Menu;
