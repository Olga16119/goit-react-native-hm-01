import { StyleSheet, View, Text } from "react-native";

export const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Публікації</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    backgroundColor: "#fff",
  },
  
  title: {
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "center",
    marginTop: 44,
    color: "#212121",
    borderBottomWidth: 0.5,
    borderBottomColor: "#0000004d",
  },
});
