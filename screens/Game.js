import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getStorage, LobbyContainer } from 'gettint-drunk'
import { useIsFocused } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

let token;

const Game = ({ navigation }) => {

  const isFocused = useIsFocused();


  useEffect(() => {
    (async () => {
      token = await getStorage('token');
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    })()
    return async () => {
      await ScreenOrientation.unlockAsync();
    }
  }, [isFocused])

  const handleNavigation = () =>{
    navigation.navigate('Home');
  }

  return (
    <LobbyContainer mobileToken={token} onAfterQuit={handleNavigation} />
  )
}

export default Game