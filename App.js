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
    justifyContent: 'center',
  },
});