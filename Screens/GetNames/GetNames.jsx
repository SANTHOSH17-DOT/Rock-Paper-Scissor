import { View, Text, TextInput, Pressable } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function GetNames({route,navigation}) {
  const { type } = route.params;
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();
  const createUser = async () => {
  try {
    await AsyncStorage.setItem('rps_user1', user1)
    if (type === "multi") {
      await AsyncStorage.setItem('rps_user2', user2)
    }
    await AsyncStorage.setItem('type', type);
    navigation.navigate("Choice")
  } catch (e) {
    console.log(e.message);
  }
}
  return (
    <View>
      {type === "multi" ? (
        <View>
          <View>
            <TextInput placeholder='Enter player1 name' onChange={setUser1}/>
            <TextInput placeholder='Enter player2 name' onChange={setUser2}/>
          </View>
          <Pressable onPress={createUser}>
              <Text>Enter Game</Text>
          </Pressable>
        </View>
      ):<View>
          <View>
            <TextInput placeholder='Enter player name' onChange={setUser1}/>
          </View>
          <Pressable onPress={createUser}>
              <Text>Enter Game</Text>
          </Pressable>
        </View>}
    </View>
  )
}