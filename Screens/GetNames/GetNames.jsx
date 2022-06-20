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
    console.log(user1)
    await AsyncStorage.setItem('rps_user1', user1)
    if (type === "multi") {
      await AsyncStorage.setItem('rps_user2', user2)
    } else {
      await AsyncStorage.setItem('rps_user2', "Computer")
    }
    await AsyncStorage.setItem('type', type);
    navigation.navigate("Choice")
  } catch (e) {
    console.log(e.message);
  }
}
  return (
    <View style={styles.container}>
      {type === "multi" ? (
        <View style={styles.homeContainer}>
          <View>
            <TextInput placeholder='Enter player1 name' onChangeText={(text => setUser1(text))} style={styles.textInput} />
            <TextInput placeholder='Enter player2 name' onChangeText={(text => setUser2(text))} style={styles.textInput}/>
          </View>
          <Pressable onPress={createUser} style={styles.btn1}>
              <Text style={styles.btn1Txt}>Enter Game</Text>
          </Pressable>
        </View>
      ):<View style={styles.homeContainer}>
          <View>
            <TextInput placeholder='Enter player name' onChangeText={(text => setUser1(text))} style={styles.textInput}/>
          </View>
          <Pressable onPress={()=>createUser()} style={styles.btn1}>
              <Text style={styles.btn1Txt}>Enter Game</Text>
          </Pressable>
        </View>}
    </View>
  )
}