import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
export default function Game({route,navigation}) {
  const { user1Choice, user2Choice } = route.params;
  const [winner, setWinner] = useState("");
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [type, setType] = useState();
  useEffect(() => {
  const getUserData = async () => {
    try {
        const type = await AsyncStorage.getItem('type')
        setType(type);
        const user1 = await AsyncStorage.getItem('rps_user1')
        setUser1(user1);
        if (type === "multi") {
          const user2 = await AsyncStorage.getItem('rps_user2');
          setUser2(user2);
        } else {
          setUser2("Computer")
        }
    } catch(e) {
      console.log(e.message);
    }
    }
    getUserData();
  }, [])
  useEffect(() => {
    const findWinner = async () => {
      if (user1Choice === user2Choice) {
        setWinner("");
      } else {
        if ((user1Choice === "rock" && user2Choice === "scissor")||(user1Choice === "paper" && user2Choice == "rock")||(user1Choice === "scissor" && user2Choice === "paper")) {
          setWinner(user1);
        } else {
          setWinner(user2);
        }
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
    <View>
      {winner === "" ? <Text>Tie!</Text> : <Text>{winner} wins!!!</Text>}
      <Pressable onPress={()=>navigation.navigate("Choice")}>
        <Text>Play again</Text>
      </Pressable>
      <Pressable onPress={newGameHandler}>
        <Text>New game</Text>
      </Pressable>
    </View>
  )
}