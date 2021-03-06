import React, { useEffect } from 'react';

// library
import { getStorage, LoginNf, setStorage } from 'gettint-drunk';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';


const Login = ({ navigation }) => {

  const isFocused = useIsFocused();

  const handleNavigation = (routes) => async (e) => {
    if (e.data !== undefined) {

      await Promise.all([
        setStorage('token', e.data.token),
        setStorage('refreshToken', e.data.refreshToken),
        setStorage('user', e.data.id)
      ])
    }

    navigation.navigate(routes);
  }

  function callbackUseEffect() {

    (async () => {
      await ScreenOrientation.unlockAsync();

      const token = await getStorage('token');
      if (token !== null) {
        navigation.navigate('Home');
      }
    })()
  }

  useEffect(callbackUseEffect, [isFocused])

  return (
    <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LoginNf onPressSubmit={handleNavigation('Home')} onGoToRegistration={handleNavigation('Registration')} />
    </View>
  )
}

export default React.memo(Login);