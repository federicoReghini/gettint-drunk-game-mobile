import React from 'react';

// native components
import { StyleSheet, View } from 'react-native';

// library
import { LeaderBoardNf } from 'gettint-drunk';

const Leaderboard = ({ navigation }) => {

  const handleNavigate = () => {
    navigation.navigate('Home')
  }

  return (
    <View
      style={styles.leaderBoardContainer}
    >
      <LeaderBoardNf onClickNavigate={handleNavigate} />
    </View>
  )
}

export default Leaderboard;

const styles = StyleSheet.create({
  leaderBoardContainer: {
    flex: 1
  },
})