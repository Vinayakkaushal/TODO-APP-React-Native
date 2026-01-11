import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}></Text>

      <TouchableOpacity onPress={toggleDarkMode}><Text>
        Toggle the mode
        </Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 40,
  },
});
