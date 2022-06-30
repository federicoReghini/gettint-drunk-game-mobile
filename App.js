// native components
import { StatusBar } from 'expo-status-bar';
import { getStorage, useLogout, getExpireStorage, clearStorage } from 'gettint-drunk';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// components
import EntryApp from './EntryApp';

export default function App() {

  const logout = useLogout();

  (async () => {
    const REFRESHTOKEN = await getStorage('refreshToken')
    const EXPIRE = await getExpireStorage('refreshToken')
    const ISEXPIRE = await logout.logoutExpire(REFRESHTOKEN, EXPIRE);
    ISEXPIRE && await clearStorage();
  })();


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