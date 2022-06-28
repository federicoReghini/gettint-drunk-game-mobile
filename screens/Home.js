import React from 'react';

// library components
import { clearStorage, HomeNf } from 'gettint-drunk';
import { View } from 'react-native';


const Home = ({ navigation }) => {
  // clearStorage()

  const handleNavigation = (path) => () => {
    navigation.navigate(path);
  }

  return (
    <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HomeNf
        onQuickMatch={handleNavigation('JoinLobby')}
        onCreateLobby={handleNavigation('CreatesLobby')}
        onLeaderBoard={handleNavigation('Leaderboard')}
      />
    </View>
  )
}

export default Home