import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { LobbyContainer } from 'gettint-drunk'
import { useIsFocused } from '@react-navigation/native';

const Game = ({ navigation }) => {

  const isFocused = useIsFocused();


  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    })()
  }, [isFocused])

  return (
    <LobbyContainer />
  )
}

export default Game