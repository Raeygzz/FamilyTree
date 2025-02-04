import "../../gesture-handler";
import { Provider } from "react-redux";
import { Slot, SplashScreen, Stack } from "expo-router";

import "../components/theme/global.css";
import { store } from "@/src/redux/store";
// import mockApi from "@/services/api/mock";
import { AppConfiguration } from "@/src/components";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

// mockApi({ delayResponse: 2000, onNoMatch: "passthrough" });

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppConfiguration>
          <Slot />

          {/* <Stack
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(protected)" />
        </Stack> */}
        </AppConfiguration>
      </Provider>
    </SafeAreaProvider>
  );
}
