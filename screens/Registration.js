import { View, Text } from 'react-native'
import React from 'react'
import { SignupNf, setStorage } from 'gettint-drunk'

const Registration = ({ navigation }) => {

  const handleNavigation = async (e) => {
    await Promise.all([
      setStorage('token', e.data.token),
      setStorage('refreshToken', e.data.refreshToken),
      setStorage('user', e.data.id)
    ])

    navigation.navigate('Home');
  }

  return (
    <SignupNf onPressSubmit={handleNavigation} />
  )
}

export default Registration