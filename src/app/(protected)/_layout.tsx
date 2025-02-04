import { Redirect, Stack } from "expo-router";

import { useAppSelector } from "@/src/redux/store";

export default function PrivateLayout() {
  const { isAuthenticated } = useAppSelector((state) => state.appConfiguration);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="(drawer)" options={{}} />
      <Stack.Screen name="profile" options={{}} />
      <Stack.Screen name="hierarchy" options={{}} />
      <Stack.Screen name="payments" options={{}} />
      <Stack.Screen name="faqs" options={{}} />
      <Stack.Screen name="change-password" options={{}} />
      <Stack.Screen name="settings" options={{}} />
    </Stack>
  );
}
