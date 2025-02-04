import { Drawer } from "expo-router/drawer";
import { router, usePathname } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AntDesign, Entypo, Feather, MaterialIcons } from "@expo/vector-icons";

const CustomDrawerContent = (props: any) => {
  const pathname = usePathname();
  const { bottom } = useSafeAreaInsets();

  return (
    <View className=" flex-1">
      <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{}}>
        <View className="flex-row justify-center items-center px-[10px] py-5 border-b-[1px] mb-[10px] border-b-[#ccc]">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
            className="w-20 h-20 rounded-[40px]"
          />

          <View className="ml-3">
            <Text className="text-base font-bold">Regan Timsina</Text>
            <Text className="italic underline text-base font-bold">timsina.regan@gmail.com</Text>
          </View>
        </View>

        <DrawerItem
          label={"Home"}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/dashboard" ? "#FFF" : "#000",
            },
          ]}
          style={{ backgroundColor: pathname === "/dashboard" ? "#333" : "#FFF" }}
          onPress={() => router.push("/(protected)/(drawer)/(tabs)/dashboard")}
          icon={({ color, size }) => (
            <Entypo name="home" size={size} color={pathname === "/dashboard" ? "#FFF" : "#000"} />
          )}
        />

        <DrawerItem
          label={"Tree"}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/tree" ? "#FFF" : "#000",
            },
          ]}
          style={{ backgroundColor: pathname === "/hierarchy" ? "#333" : "#FFF" }}
          onPress={() => router.push("/(protected)/(drawer)/(tabs)/tree")}
          icon={({ color, size }) => (
            <AntDesign name="user" size={size} color={pathname === "/tree" ? "#FFF" : "#000"} />
          )}
        />

        <DrawerItem
          label={"Profile"}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/profile" ? "#FFF" : "#000",
            },
          ]}
          style={{ backgroundColor: pathname === "/profile" ? "#333" : "#FFF" }}
          onPress={() => router.push("/(protected)/(drawer)/profile")}
          icon={({ color, size }) => (
            <AntDesign name="user" size={size} color={pathname === "/profile" ? "#FFF" : "#000"} />
          )}
        />

        <DrawerItem
          label={"Faqs"}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/faqs" ? "#FFF" : "#000",
            },
          ]}
          style={{ backgroundColor: pathname === "/faqs" ? "#333" : "#FFF" }}
          onPress={() => router.push("/(protected)/(drawer)/faqs")}
          icon={({ color, size }) => (
            <MaterialIcons name="question-answer" size={size} color={pathname === "/faqs" ? "#FFF" : "#000"} />
          )}
        />

        <DrawerItem
          label={"Payments"}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/payments" ? "#FFF" : "#000",
            },
          ]}
          style={{ backgroundColor: pathname === "/payments" ? "#333" : "#FFF" }}
          onPress={() => router.push("/(protected)/(drawer)/payments")}
          icon={({ color, size }) => (
            <MaterialIcons name="payment" size={size} color={pathname === "/payments" ? "#FFF" : "#000"} />
          )}
        />

        <DrawerItem
          label={"Change Password"}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/change-password" ? "#FFF" : "#000",
            },
          ]}
          style={{ backgroundColor: pathname === "/change-password" ? "#333" : "#FFF" }}
          onPress={() => router.push("/(protected)/(drawer)/change-password")}
          icon={({ color, size }) => (
            <MaterialIcons name="password" size={size} color={pathname === "/change-password" ? "#FFF" : "#000"} />
          )}
        />

        <DrawerItem
          label={"Settings"}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/settings" ? "#FFF" : "#000",
            },
          ]}
          style={{ backgroundColor: pathname === "/settings" ? "#333" : "#FFF" }}
          onPress={() => router.push("/(protected)/(drawer)/settings")}
          icon={({ color, size }) => (
            <Feather name="settings" size={size} color={pathname === "/settings" ? "#FFF" : "#000"} />
          )}
        />

        <View className="bg-red-300 border-2 w-52 flex rounded-lg border-red-800 items-center self-center">
          <Text className="text-white font-semibold text-2xl">Logout</Text>
        </View>
      </DrawerContentScrollView>

      <View className={`border-2 border-[#dde3fe] p-5 pb-[20 + ${bottom}]`}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: "#5363df",
          drawerActiveTintColor: "#FFF",
          drawerLabelStyle: { marginLeft: -20 },
          swipeEdgeWidth: 0, // block drawer swipe
        }}>
        <Drawer.Screen name="(tabs)" options={{ headerTitle: "Home" }} />
        <Drawer.Screen name="profile" options={{ headerTitle: "Profile" }} />
        <Drawer.Screen name="payments" options={{ headerTitle: "Payments" }} />
        <Drawer.Screen name="faqs" options={{ headerTitle: "Faqs" }} />
        <Drawer.Screen name="change-password" options={{ headerTitle: "Change Password" }} />
        <Drawer.Screen name="settings" options={{ headerTitle: "Settings" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
});
