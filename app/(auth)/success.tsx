import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

import { usePlatform } from "@/hooks";
import { Footer, PageView } from "@/components";

const Success = () => {
  const router = useRouter();
  const { isAndroid } = usePlatform();

  const anotherFormSubmit = () => {
    router.replace("/");
  };

  return (
    <PageView paddingHorizontal={20}>
      <View className="mt-16 bg-orange-50 rounded-lg p-4 shadow-md" style={isAndroid ? { elevation: 7 } : {}}>
        <Text className="mb-4 text-2xl leading-5 text-orange-400 font-medium not-italic">Successful &#128522;</Text>

        <Text className="text-sm text-orange-400 font-medium italic mb-6">
          Your detail has beeen submitted. Please contact to admin, if you have any queries.
        </Text>

        <Pressable onPress={anotherFormSubmit}>
          <Text className="underline text-sm text-orange-400 font-medium italic">Submit another form.</Text>
        </Pressable>
      </View>

      <Footer />
    </PageView>
  );
};

export default Success;
