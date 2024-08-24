import { styles } from "./styles";
import { Text, TextInput, View,TouchableOpacity ,ScrollView } from "react-native";
import {Participant} from "../../components/Participant";
export function Home() {
const participants = ["rodrigo", "pedro", "maria", "joao", "ana","juan", "kevin", ];
  function handlePraticipantAdd(){
    console.log("clicou")
  }
  function handlePraticipantRemove(name: string){
    console.log(`remove ${name}`)
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
<ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map((participant) => (
          <Participant key={participant} name={participant} onRemove={() => handlePraticipantRemove(participant)}/>
        ))
}
      </ScrollView>
    </View>
  )
}
