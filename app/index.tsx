import { Text, View } from "react-native";

export default function App() {
  const xyz = 1000;

  function example(args = 1) {
    if (args === 1) {
      // do somethings
    } else if (args === 2) {
      console.log(xyz);
      // do somethings
    }
  }

  example();

  return (
    <View className="flex-1 border-4 border-blue-700 justify-center items-center">
      <Text className="text-orange-400 text-4xl">Edit app/index.tsx to edit this screens.</Text>
    </View>
  );
}
