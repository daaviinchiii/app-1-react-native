import { styles } from "./styles";
import { Text, TextInput, View,TouchableOpacity } from "react-native";
import {Participant} from "../../components/Participant";
export function Home() {
  function handlePraticipantAdd(){
    console.log("clicou")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
        </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
        </Text>
        <View style={styles.form}>
      <TextInput 
      style={styles.imput} 
      placeholder="Nome do participante"
      placeholderTextColor="#6b6b6b"
      />
      <TouchableOpacity style={styles.button} onPress={handlePraticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      <Participant name="david"></Participant>
      <Participant name="margarida"></Participant>
      <Participant name="tatiana"></Participant>
      <Participant name="susana"></Participant>
      <Participant name="jorge"></Participant>



    </View>
  );
}
