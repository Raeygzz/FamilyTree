import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleProp, TextStyle, ViewStyle, ScrollView, StyleSheet } from "react-native";

interface PageViewProps {
  children: ReactNode;
  paddingHorizontal?: number;
  style?: StyleProp<ViewStyle & TextStyle>;
  type?: "View" | "ScrollView";
}

function PageView(props: PageViewProps) {
  const styles = useStyles();

  const { children, paddingHorizontal = 0, style, type = "ScrollView" } = props;

  const Wrapper = React.useMemo(() => {
    switch (type) {
      case "View":
        return View;

      case "ScrollView":
        return ScrollView;

      default:
        return View;
    }
  }, [type]);

  return (
    <SafeAreaView style={styles.container}>
      <Wrapper
        style={type === "View" ? [{ paddingHorizontal }, styles.container, style] : []}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={type !== "View" ? [{ paddingHorizontal }, styles.flexGrow, style] : []}>
        {children}
      </Wrapper>
    </SafeAreaView>
  );
}

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    flexGrow: {
      flexGrow: 1,
      backgroundColor: "white",
    },
  });
};

export { PageView };
