import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter, SplashScreen, useSegments, useRootNavigationState } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  useFonts,
  HankenGrotesk_100Thin,
  HankenGrotesk_200ExtraLight,
  HankenGrotesk_300Light,
  HankenGrotesk_400Regular,
  HankenGrotesk_500Medium,
  HankenGrotesk_600SemiBold,
  HankenGrotesk_700Bold,
  HankenGrotesk_800ExtraBold,
  HankenGrotesk_900Black,
  HankenGrotesk_100Thin_Italic,
  HankenGrotesk_200ExtraLight_Italic,
  HankenGrotesk_300Light_Italic,
  HankenGrotesk_400Regular_Italic,
  HankenGrotesk_500Medium_Italic,
  HankenGrotesk_600SemiBold_Italic,
  HankenGrotesk_700Bold_Italic,
  HankenGrotesk_800ExtraBold_Italic,
  HankenGrotesk_900Black_Italic,
} from "@expo-google-fonts/hanken-grotesk";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setIsAuthenticated } from "@/redux/features";

const useProtectedRoute = () => {
  const { isAuthenticated } = useAppSelector((state) => state.appConfiguration);

  const [isAuthenticationReady, setIsAuthenticationReady] = useState(false);

  const segments = useSegments();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function isAuthenticatedStore() {
      let isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

      if (isAuthenticated === "true") {
        console.log("🚀 ~ isAuthenticatedStore ~ isAuthenticated:", isAuthenticated);
        dispatch(setIsAuthenticated(true));
        setIsAuthenticationReady(true);
      }
    }

    isAuthenticatedStore();
  }, []);

  return React.useMemo(() => {
    if (!isAuthenticationReady) return;

    const inAuthGroup = segments[0] === "(auth)";
    const inPublicGroup = segments[0] === "(public)";
    const inProtectedGroup = segments[0] === "(protected)";

    // if (inPublicGroup) return;

    // if (!isAuthenticated && segments[0] !== "(auth") return "/(auth)/";
    // if (isAuthenticated && inProtectedGroup) return "/(protected)/(tabs)/dashboard";
    // else return "/(auth)/";

    if (!isAuthenticated && segments?.[0] === "(auth)") return "/(auth)/login";

    if (isAuthenticated && segments?.[0] === "(auth)") return "/(protected)/(tabs)/dashboard";
  }, [segments, isAuthenticated, isAuthenticationReady]);
};

// const useAppConfig = () => {
//   const dispatch = useAppDispatch();
//   const splashHidden = useRef(false);

//   const [loaded, error] = useFonts({
//     HankenGrotesk_100Thin,
//     HankenGrotesk_200ExtraLight,
//     HankenGrotesk_300Light,
//     HankenGrotesk_400Regular,
//     HankenGrotesk_500Medium,
//     HankenGrotesk_600SemiBold,
//     HankenGrotesk_700Bold,
//     HankenGrotesk_800ExtraBold,
//     HankenGrotesk_900Black,
//     HankenGrotesk_100Thin_Italic,
//     HankenGrotesk_200ExtraLight_Italic,
//     HankenGrotesk_300Light_Italic,
//     HankenGrotesk_400Regular_Italic,
//     HankenGrotesk_500Medium_Italic,
//     HankenGrotesk_600SemiBold_Italic,
//     HankenGrotesk_700Bold_Italic,
//     HankenGrotesk_800ExtraBold_Italic,
//     HankenGrotesk_900Black_Italic,
//   });

//   useEffect(() => {
//     if (loaded || error) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error]);

//   if (!loaded && !error) {
//     return null;
//   }

//   return loaded;
// };

const AppConfiguration = ({ children }: PropsWithChildren<unknown>) => {
  const router = useRouter();
  const segments = useSegments();
  const route = useProtectedRoute();
  // const fontLoaded = useAppConfig();
  const navigation = useRootNavigationState();

  console.log("🚀 ~ AppConfiguration ~ route:", route);
  console.log("🚀 ~ AppConfiguration ~ segments:", segments);
  // console.log("🚀 ~ AppConfiguration ~ fontLoaded:", fontLoaded);
  console.log("🚀 ~ AppConfiguration ~ navigation:", navigation);

  useEffect(() => {
    if (!route || navigation?.key != null) return;

    SplashScreen.hideAsync();
    router.replace(route);
  }, [route, navigation, router]);

  return <>{children}</>;
  // return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export { AppConfiguration };
