import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
export default function Home({navigation}) {
  return (
    <View>
      <Text>Rock Paper Scissor</Text>
      <Pressable onPress={navigation.navigate("GetNames",{type:"multi"})}>
        <Text>Multiplayer</Text>
      </Pressable>
      <Pressable onPress={navigation.navigate("GetNames",{type:"single"})}>
        <Text>Single player</Text>
      </Pressable>
    </View>
  )
}