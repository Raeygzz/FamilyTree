import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function App() {
  const router = useRouter();

  const getStarted = () => {
    router.push("/login");
  };

  return (
    <View className="flex-1 border-4 border-blue-700 justify-center items-center gap-4">
      <Text className="text-orange-400 text-4xl">Edit *app/index.tsx* to edit this screens.</Text>

      <Pressable onPress={getStarted}>
        <Text>Get Started</Text>
      </Pressable>
    </View>
  );
}
