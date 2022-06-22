import { StatusBar } from 'expo-status-bar';
import { ButtonNf, HomeNf } from 'gettint-drunk/dist/components';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeNf 
      onQuickMatch={()=> console.log('onQuickMatch')} 
      onCreateLobby={()=> console.log('onCreateLobby')} 
      onLeaderBoard={()=> console.log('onLeaderBoard')} 
      />
      {/* <ButtonNf title={'prova'} /> */}
    </View>
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