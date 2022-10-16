import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BankWebview from "./src/BankWebview";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BankWebview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
