import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import RPS from '../../assets/RPS'
// import LottieView from 'lottie-react-native';
export default function Home({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <View>
          <Text style={styles.title}>Rock Paper Scissor</Text>
        </View>
        <View style={styles.btnContainer}>
            <Pressable style={styles.btn1} onPress={()=>navigation.navigate("GetNames",{type:"multi"})}>
              <Text style={styles.btn1Txt}>Multiplayer</Text>
            </Pressable>
            <Pressable style={styles.btn2} onPress={()=>navigation.navigate("GetNames",{type:"single"})}>
              <Text style={styles.btn2Txt}>Single player</Text>
            </Pressable>
        </View>
        <View>
          <RPS/>
        </View>
      </View>
    </View>
  )
}