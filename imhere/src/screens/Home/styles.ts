import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: { color: "#FFF", fontSize: 24, fontWeight: "bold", marginTop: 48 },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  imput: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  form :{
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom:43
  }
});
