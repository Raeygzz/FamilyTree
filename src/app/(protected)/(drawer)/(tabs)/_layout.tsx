import { Tabs } from "expo-router";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        headerShown: false,
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{ title: "Home", tabBarIcon: ({ size, color }) => <Entypo name="home" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="tree"
        options={{
          title: "Tree",
          tabBarIcon: ({ size, color }) => <Entypo name="tree" size={size} color="black" />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ size, color }) => <FontAwesome name="user" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
