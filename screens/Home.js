import React from 'react';

// library components
import { HomeNf } from 'gettint-drunk/dist/components';
import { Text, View } from 'react-native';


const Home = ({ navigation }) => {

  const handleQuickMatch = () => {

  }

  const handleCreateLobby = () => {
    navigation.navigate('Leaderboard');
  }

  const handleLeaderBoard = () => {
    navigation.navigate('Leaderboard');
  }

  const handleNavigation = (path) => () =>{
    navigation.navigate(path);
  }

  return (
   <View style={{flex:1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 3 ,backgroundColor: 'red'}}>
     <HomeNf
      onQuickMatch={handleQuickMatch}
      onCreateLobby={handleCreateLobby}
      onLeaderBoard={handleNavigation('Leaderboard')}
    />
   </View>
  )
}

export default Home