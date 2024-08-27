import { styles } from "./styles";
import React,{useState} from "react";
import { Text, TextInput, View,TouchableOpacity ,FlatList, Alert, RefreshControl } from "react-native";
import {Participant} from "../../components/Participant";
export function Home() {
 const [participants,setparticipants]= useState<string[]>([]);
 const [participaName,setparticipaName]= useState('');


  function handlePraticipantAdd(){
    if (participants.includes(participaName)){
      return Alert.alert("Participante existe","Já exite um participante na lista com esse nome.")
    }
    setparticipants(prevState =>[...prevState,participaName]);
setparticipaName("");    
  }
  function handlePraticipantRemove(name: string){
     Alert.alert("Remover",`Remover participante ${name}?`,[
      {
        text: "Sim",
onPress:() => Alert.alert("Deletado!")  
      },
      {

text: 'nao',
style: 'cancel'
}
     ])
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
      onChangeText={ setparticipaName }
      value={participaName}
      />
      <TouchableOpacity style={styles.button} onPress={handlePraticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      {
        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({item})=>(
            <Participant key={item} name={item} onRemove={() => handlePraticipantRemove(item)}/>
          )}
        />
}

    </View>
  )
}
