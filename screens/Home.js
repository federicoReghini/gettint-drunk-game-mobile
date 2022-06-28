import React from 'react';

// library components
import { clearStorage, HomeNf, getStorage, setStorage } from 'gettint-drunk';
import { View } from 'react-native';


const Home = ({ navigation }) => {
  // clearStorage()

  (async () => {
   
    const res = await getStorage('token');
    const res1 = await getStorage('refreshToken');
    const res2 = await getStorage('user');
    console.log('res',res);
    console.log('res1',res1);
    console.log('res2',res2);
  })()
  const handleQuickMatch = () => {

  }

  const handleNavigation = (path) => () => {
    navigation.navigate(path);
  }

  return (
    <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HomeNf
        onQuickMatch={handleQuickMatch}
        onCreateLobby={handleNavigation('CreatesLobby')}
        onLeaderBoard={handleNavigation('Leaderboard')}
      />
    </View>
  )
}

export default Home