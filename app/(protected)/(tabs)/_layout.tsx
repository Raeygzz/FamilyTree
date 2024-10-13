import { Tabs } from "expo-router";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{ title: "Home", tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} /> }}
      />
      <Tabs.Screen
        name="tree"
        options={{
          title: "Tree",
          tabBarIcon: ({ color }) => <MaterialIcons name="category" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{ title: "Menu", tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> }}
      />
    </Tabs>
  );
}
