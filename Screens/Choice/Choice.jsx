import { View, Text, Pressable } from 'react-native'
import React,{useEffect, useState} from 'react'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Rock from '../../assets/Rock'
import Paper from '../../assets/Paper'
import Scissor from '../../assets/Scissor'
export default function Choice({ navigation }) {
  const [user1,setUser1] = useState()
  const [user2,setUser2] = useState()
  const [type,setType] = useState()
  const [ user1Choice, setUser1Choice ] = useState("");
  const [ user2Choice, setUser2Choice ] = useState("");
  useEffect(() => {
    if (type === "single"&&user1Choice) {
      const a = user1Choice;
      const choices = ["rock", "paper", "scissor"];
      const b = choices[Math.floor(Math.random()*3)];
      navigation.navigate("Game", { user1Choice:a, user2Choice:b });
      setUser1Choice("");
      setUser2Choice("");
    } else {
      if (user1Choice && user2Choice) {
        const a = user1Choice;
        const b = user2Choice;
        navigation.navigate("Game", { user1Choice:a, user2Choice:b });
        setUser1Choice("");
        setUser2Choice("");
      }
    }
    
  }, [user1Choice, user2Choice])
  useEffect(()=>{
    const getUserData = async () => {
      try {
        const type = await AsyncStorage.getItem('type')
        setType(type);
        const user1 = await AsyncStorage.getItem('rps_user1')
        setUser1(user1);
        if (type === "multi") {
          const user2 = await AsyncStorage.getItem('rps_user2');
          setUser2(user2);
        }
      } catch(e) {
        console.log(e.message);
      }
      }
      getUserData();
  }, [])
  return (
    <View style={styles.container}>
      {user1Choice === "" ? (
        <View style={styles.homeContainer}>
          <View>
            <Text style={styles.title}>{user1}'s choice</Text> 
          </View>
          <View style={styles.choiceContainer}>
            <Pressable style={styles.selectContainer} onPress={() => setUser1Choice("rock")}><Rock width={50} height={50} /><Text>Rock</Text></Pressable>
            <Pressable style={styles.selectContainer} onPress={()=>setUser1Choice("paper")}><Paper width={50} height={50}/><Text>Paper</Text></Pressable>
            <Pressable style={styles.selectContainer} onPress={()=>setUser1Choice("scissor")}><Scissor width={50} height={50}/><Text>Scissor</Text></Pressable>
          </View>
        </View>
      ) : <View style={styles.homeContainer}>
          <View>
            <Text style={styles.title}>{user2}'s choice</Text> 
          </View>
          <View style={styles.choiceContainer}>
            <Pressable style={styles.selectContainer} onPress={()=>setUser2Choice("rock")}><Rock width={50} height={50}/><Text>Rock</Text></Pressable>
            <Pressable style={styles.selectContainer} onPress={()=>setUser2Choice("paper")}><Paper width={50} height={50}/><Text>Paper</Text></Pressable>
            <Pressable style={styles.selectContainer} onPress={()=>setUser2Choice("scissor")}><Scissor width={50} height={50}/><Text>Scissor</Text></Pressable>
          </View>
        </View>}
    </View>
  )
}