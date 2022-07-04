import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getStorage, LobbyContainer } from 'gettint-drunk'
import { useIsFocused } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { requestCard, stopPlaying } from '../webSocket/genericWebSocket';

let token;

const Game = ({ route, navigation }) => {

  const isFocused = useIsFocused();
  const { idLobby } = route.params;
  const { idUser } = route.params;

  useEffect(() => {
    (async () => {
      token = await getStorage('token');
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    })()
    return async () => {
      await ScreenOrientation.unlockAsync();
    }
  }, [isFocused])

  const handleNavigation = () => {
    navigation.navigate('Home');
  }

  const requestCardFunc = () => {
    requestCard(idUser)
  }

  const stopPlayingFunc = () => {
    stopPlaying(idUser)
  }

  return (
    <LobbyContainer
      lobbyId={idLobby}
      userId={idUser}
      onRequestCard={requestCardFunc}
      onStop={stopPlayingFunc}
      onAfterQuit={handleNavigation}
    />
  )
}

export default Game