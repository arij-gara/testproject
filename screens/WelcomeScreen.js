import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function WelcomeScreen() {

    const navigation = useNavigation()

    useEffect (() => { 
        setTimeout(() =>navigation.navigate("Timer"),3500)
      }
    )    
  return (
    <View  className="flex-1 bg-lime-200  items-center justify-center pt-14 space-y-10">
      <StatusBar style="dark" />
      <Text className="font-bold  text-6xl  tracking-widest">welcome</Text>
    </View>
  );
}
