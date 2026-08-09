import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Library: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Медиатека</Text>
      <Text style={styles.subtitle}>Второй экран</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
  },
});
