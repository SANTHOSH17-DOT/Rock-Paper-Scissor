import { View, Text, Pressable } from 'react-native'
import React,{useEffect, useState} from 'react'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Choice({ navigation }) {
  const [user1,setUser1] = useState()
  const [user2,setUser2] = useState()
  const [type,setType] = useState()
  const { user1Choice, setUser1Choice } = useState("");
  const { user2Choice, setUser2Choice } = useState("");
  useEffect(() => {
    if (type === "single"&&user1Choice) {
      const a = user1Choice;
      const choices = ["rock", "paper", "scissor"];
      const b = choices[Math.floor(Math.random()*3)];
      setUser1Choice("");
      setUser2Choice("");
      navigation.navigate("Game", { user1Choice:a, user2Choice:b });
    } else {
      if (user1Choice && user2Choice) {
        const a = user1Choice;
        const b = user2Choice;
        setUser1Choice("");
        setUser2Choice("");
        navigation.navigate("Game", { user1Choice:a, user2Choice:b });
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
    <View>
      {typeof user1Choice === "" ? (
        <View>
          <Text>{user1}'s choice</Text>
          <Pressable onPress={()=>setUser1Choice("rock")}><Text>Rock</Text></Pressable>
          <Pressable onPress={()=>setUser1Choice("paper")}><Text>Paper</Text></Pressable>
          <Pressable onPress={()=>setUser1Choice("scissor")}><Text>Scissor</Text></Pressable>
        </View>
      ):<View>
          <Text>{user2}'s choice</Text>
          <Pressable onPress={()=>setUser1Choice("rock")}><Text>Rock</Text></Pressable>
          <Pressable onPress={()=>setUser1Choice("paper")}><Text>Paper</Text></Pressable>
          <Pressable onPress={()=>setUser1Choice("scissor")}><Text>Scissor</Text></Pressable>
        </View>}
    </View>
  )
}