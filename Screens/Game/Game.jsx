import { View, Text } from 'react-native'
import React, {useState, useEffect } from 'react'
import styles from './styles'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Rock from '../../assets/Rock'
import Paper from '../../assets/Paper'
import Scissor from '../../assets/Scissor'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Game({route,navigation}) {
  const { user1Choice, user2Choice } = route.params;
  const [winner, setWinner] = useState();
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  useEffect(() => {
    const findWinner = async () => {
      try {
        const user1 = await AsyncStorage.getItem('rps_user1')
        setUser1(user1);
        const user2 = await AsyncStorage.getItem('rps_user2');
        setUser2(user2);
        console.log(user2)
        if (user1Choice === user2Choice) {
        setWinner("");
        } else {
          if ((user1Choice === "rock" && user2Choice === "scissor")||(user1Choice === "paper" && user2Choice == "rock")||(user1Choice === "scissor" && user2Choice === "paper")) {
            setWinner(user1);
          } else {
            setWinner(user2);
          }
        }
      } catch(e) {
        console.log(e.message);
      }
    }
    findWinner();
  }, [])
  const newGameHandler = async() => {
    await AsyncStorage.setItem('rps_user1', "")
    await AsyncStorage.setItem('rps_user2', "")
    await AsyncStorage.setItem('type', "")
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <View>
          <View>
            <Text style={styles.userTxt}>{user1}</Text>
          </View>
          <View>
            {user1Choice==="rock"?<Rock width={100} height={100}/>:<Text></Text>}
            {user1Choice==="paper"?<Paper width={100} height={100}/>:<Text></Text>}
            {user1Choice==="scissor"?<Scissor width={100} height={100}/>:<Text></Text>}
          </View>
        </View>
        <View>
          <View style={{marginLeft:"auto"}}>
            <Text style={styles.userTxt}>{user2}</Text>
          </View>
          <View style={{transform:[{scaleX:-1}]}}>
            {user2Choice==="rock"?<Rock width={100} height={100}/>:<Text></Text>}
            {user2Choice==="paper"?<Paper width={100} height={100}/>:<Text></Text>}
            {user2Choice==="scissor"?<Scissor width={100} height={100}/>:<Text></Text>}
          </View>
        </View>
      </View>
      <View>
         <Text style={styles.resultTxt}>{winner === "" ?"Tie!" :`${winner} wins!!!`}</Text>
        <View style={styles.btnContainer}>
          <Pressable onPress={()=>navigation.navigate("Choice")} style={styles.btn1}>
            <Text style={styles.btn1Txt}>Play again</Text>
          </Pressable>
          <Pressable onPress={newGameHandler} style={styles.btn2}>
            <Text style={styles.btn2Txt}>New game</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}