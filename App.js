// native components
import { StatusBar } from 'expo-status-bar';
import { useLogout } from 'gettint-drunk';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// components
import EntryApp from './EntryApp';

export default function App() {

  const logout = useLogout();

  const callbackEffect = () => {
    (async()=>{
      await logout.logoutExpire();
    })();
  }

  useEffect(callbackEffect, []);

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