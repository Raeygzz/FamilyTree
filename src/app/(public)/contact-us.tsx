import React from "react";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";

import { usePlatform } from "@/src/hooks";
import { BackButton, Footer, PageView } from "@/src/components";

const Contact = () => {
  const router = useRouter();
  const { isAndroid } = usePlatform();

  const onBack = () => {
    router.replace("/");
  };

  return (
    <PageView paddingHorizontal={20}>
      <BackButton onPress={onBack} />

      <View className="mt-16 bg-orange-50 rounded-lg p-4 shadow-md" style={isAndroid ? { elevation: 7 } : {}}>
        <Text className="mb-4 text-lg leading-5 text-orange-400 font-medium not-italic">
          Please contact on the below contacts, if you have any queries.
        </Text>

        <Text className="text-sm text-orange-400 font-medium italic">Regan Timsina</Text>
        <Text className="text-sm text-orange-400 font-medium italic">timsina.regan@gmail.com</Text>
        <Text className="text-sm text-orange-400 font-medium italic">9842566750</Text>
      </View>

      <Footer />
    </PageView>
  );
};

export default Contact;
