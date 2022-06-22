import React from 'react';

// native compoents and navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import CreatesLobby from './screens/CreatesLobby';
import Game from './screens/Game';
import Home from './screens/Home';
import JoinLobby from './screens/JoinLobby';
import Leaderboard from './screens/Leaderboard';


const EntryApp = () => {

  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
        >

          {/* <Stack.Screen
            name='Tutorial'
            component={Tutorial}
            options={
              {
                title: 'Tutorial',
                headerStyle: {
                  backgroundColor: '#fff',
                },
                headerTintColor: '#44403C',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                }
              }
            }
            initialParams={{
              isFirstTime: state.isFirstTime
            }}
          /> */}

          <Stack.Screen
            name='Home'
            component={Home}
            options={
              {
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#fff',
                },
                headerTintColor: '#44403C',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                }
              }
            }
          />

          <Stack.Screen
            name='CreatesLobby'
            component={CreatesLobby}
            options={
              {
                title: 'Create Lobby',
                headerStyle: {
                  backgroundColor: '#fff',
                },
                headerTintColor: '#44403C',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                }
              }
            }
          />

          <Stack.Screen
            name='JoinLobby'
            component={JoinLobby}
            options={
              {
                title: 'Join Lobby',
                headerStyle: {
                  backgroundColor: '#fff',
                },
                headerTintColor: '#44403C',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                }
              }
            }
          />

          <Stack.Screen
            name='Game'
            component={Game}
            options={
              {
                title: 'Game',
                headerStyle: {
                  backgroundColor: '#fff',
                },
                headerTintColor: '#44403C',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                }
              }
            }
          />

          <Stack.Screen
            name='Leaderboard'
            component={Leaderboard}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}

export default EntryApp