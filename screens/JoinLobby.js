import React from 'react';

// library components
import { JoinLobbyNf } from 'gettint-drunk';

const JoinLobby = ({ navigation }) => {

  const handleNavigation = () => {
    navigation.navigate('Game')
  }

  return (
    <JoinLobbyNf onStartMatch={handleNavigation} />
  )
}

export default JoinLobby