import React from 'react';

// library components
import { HomeNf } from 'gettint-drunk/dist/components';
import { View } from 'react-native';


const Home = ({ navigation }) => {

  const handleQuickMatch = () => {

  }

  const handleNavigation = (path) => () =>{
    navigation.navigate(path);
  }

  return (
   <View style={{flex:1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     <HomeNf
      onQuickMatch={handleQuickMatch}
      onCreateLobby={handleNavigation('CreatesLobby')}
      onLeaderBoard={handleNavigation('Leaderboard')}
    />
   </View>
  )
}

export default Home