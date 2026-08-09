import {
  RouterRoot,
  useLocation,
  useNavigate,
} from "@typeroute/router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { routes } from "./routes";

function BottomMenu() {
  const navigate = useNavigate();
  const { path } = useLocation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.menu, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <Pressable
        accessibilityRole="button"
        onPress={() => navigate({ to: routes.home })}
        style={[styles.button, path === "/" && styles.activeButton]}
      >
        <Text style={[styles.label, path === "/" && styles.activeLabel]}>
          Главная
        </Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        onPress={() => navigate({ to: routes.library })}
        style={[styles.button, path === "/library" && styles.activeButton]}
      >
        <Text
          style={[styles.label, path === "/library" && styles.activeLabel]}
        >
          Медиатека
        </Text>
      </Pressable>
    </View>
  );
}

export function AppTabsLayout() {
  return (
    <View style={styles.container}>
      <RouterRoot routes={routes} />
      <BottomMenu />
    </View>
  );
}

declare module "@typeroute/router" {
  interface Register {
    routes: typeof routes;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#ffffff",
  },
  button: {
    flex: 1,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  activeButton: {
    backgroundColor: "#eeeeee",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  activeLabel: {
    fontWeight: "700",
  },
});
