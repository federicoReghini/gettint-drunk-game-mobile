import { View, Text } from 'react-native'
import React from 'react'
import { SignupNf } from 'gettint-drunk'

const Registration = ({ navigation }) => {

  const handleNavigation = () => {
    navigation.navigate('Home');
  }

  return (
    <SignupNf onPressSubmit={handleNavigation} />
  )
}

export default Registration