// library components
import { ButtonNf, CreateLobby, HomeNf, LeaderBoard } from 'gettint-drunk/dist/components';

// native components
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

// components
import EntryApp from './EntryApp';

const listOfPlayers = [
  {
    id: 0,
    nickname: 'fad'
  },
  {
    id: 1,
    nickname: 'dasd'
  },
  {
    id: 2,
    nickname: 'faasdffdd'
  },
  {
    id: 3,
    nickname: 'sdfs'
  },
]

export default function App() {

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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <EntryApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});