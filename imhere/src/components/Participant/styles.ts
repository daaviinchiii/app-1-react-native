import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container:{
  width:'100%',
  borderRadius:5,
  flexDirection:'row',
  backgroundColor: '#1f1e25',
  alignItems:'center',
  marginBottom:10,
  
},
name:{
  flex:1,
  color:"#fff",
  fontSize:16,
  paddingLeft:16,


},
button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
