import { Platform } from "react-native";
import { useEffect, useState } from "react";

const usePlatform = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isNativePlatform, setIsNativePlatform] = useState(false);

  useEffect(() => {
    const ios = Platform.OS === "ios";
    const android = Platform.OS === "android";
    const nativePlatform = Platform.OS === "android" || Platform.OS === "ios";

    setIsIOS(ios);
    setIsAndroid(android);
    setIsNativePlatform(nativePlatform);
  }, []);

  return { isIOS, isAndroid, isNativePlatform };
};

export { usePlatform };
