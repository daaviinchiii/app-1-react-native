import { styles } from "./styles";
import { Text, View, TouchableOpacity } from "react-native";
type Props = {
  name:String;
}
export function Participant( {name}: Props ) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
           <TouchableOpacity style={styles.button} >
     <Text style={styles.buttonText}>-</Text>
   </TouchableOpacity>
    </View>

  );
}
