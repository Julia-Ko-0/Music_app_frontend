import { Text, View } from "react-native";

import { styles } from "./HomeScreen.styles";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Привет</Text>
    </View>
  );
}
