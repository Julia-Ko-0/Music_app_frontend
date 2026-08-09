import { StyleSheet } from "react-native";

import { colors, spacing, typography } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.md,
    backgroundColor: colors.background,
  },

  title: {
    fontSize: typography.title,
    color: colors.textPrimary,
  },
});
