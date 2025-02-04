import { Platform } from "react-native";
import { useEffect, useState } from "react";

const usePlatform = () => {
  const [isWeb, setIsWeb] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isNativePlatform, setIsNativePlatform] = useState(false);

  useEffect(() => {
    const web = Platform.OS === "web";
    const ios = Platform.OS === "ios";
    const android = Platform.OS === "android";
    const nativePlatform = Platform.OS === "android" || Platform.OS === "ios";

    setIsWeb(web);
    setIsIOS(ios);
    setIsAndroid(android);
    setIsNativePlatform(nativePlatform);
  }, []);

  return { isWeb, isIOS, isAndroid, isNativePlatform };
};

export { usePlatform };
