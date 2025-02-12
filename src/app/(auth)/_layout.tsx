import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="login" options={{}} />
      <Stack.Screen name="signup" options={{}} />
      <Stack.Screen name="forgot-password" options={{}} />
    </Stack>
  );
}
