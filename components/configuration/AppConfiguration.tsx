import { useRouter, SplashScreen, useSegments, useRootNavigationState } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { PropsWithChildren, useEffect, useState } from "react";
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

import { setIsAuthenticated } from "@/redux/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const AppConfiguration = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAppSelector((state) => state.appConfiguration);

  const [isFontReady, setIsFontReady] = useState(false);
  const [isAuthenticationReady, setIsAuthenticationReady] = useState(false);

  const router = useRouter();
  const segments = useSegments();
  const dispatch = useAppDispatch();
  const navigation = useRootNavigationState();

  // console.log("🚀 segments: =========================> ", segments);
  // console.log("🚀 navigation: =========================> ", navigation);
  // console.log("🚀 isAuthenticated: =========================> ", isAuthenticated);
  // console.log("🚀 isAuthenticationReady: =========================> ", isAuthenticationReady);

  const [loaded, error] = useFonts({
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
  });

  useEffect(() => {
    async function isAuthenticatedStore() {
      let isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

      if (isAuthenticated === "true") {
        dispatch(setIsAuthenticated(true));
        setIsAuthenticationReady(true);
      }
    }

    isAuthenticatedStore();
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticationReady) return;

    if (!isAuthenticated && segments?.[0] !== "(auth)") return router.replace("/(auth)/");

    if (isAuthenticated && segments?.[0] !== "(protected)")
      return router.replace("/(protected)/(drawer)/(tabs)/dashboard");
  }, [isAuthenticated, isAuthenticationReady, router, segments]);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!isAuthenticationReady && !loaded && !error) {
    return null;
  }

  return <>{children}</>;
};

export { AppConfiguration };
