import React from 'react';

// native components
import { StyleSheet, View } from 'react-native';

// library
import { LeaderBoard } from 'gettint-drunk/dist/components';

const Leaderboard = ({ navigation }) => {

  const handleNavigate = () => {
    navigation.navigate('Home')
  }

  return (
    <View
      style={styles.leaderBoardContainer}
    >
      <LeaderBoard onClickNavigate={handleNavigate} />
    </View>
  )
}

export default Leaderboard;

const styles = StyleSheet.create({
  leaderBoardContainer: {
    flex: 1
  },
})