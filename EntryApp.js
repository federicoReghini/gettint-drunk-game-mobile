import React, { useEffect, useState } from 'react';

// native compoents and navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import CreatesLobby from './screens/CreatesLobby';
import Game from './screens/Game';
import Home from './screens/Home';
import JoinLobby from './screens/JoinLobby';
import Leaderboard from './screens/Leaderboard';
import Registration from './screens/Registration';
import Login from './screens/Login';
import { getStorage } from 'gettint-drunk';

const initState = {
  isLoggedIn: false
}

const EntryApp = () => {

  const Stack = createStackNavigator();

  const [state, setState] = useState(initState);

  function callbackUseEffect() {
    const newState = Object.assign({}, state);
    (async () => {

      const token = await getStorage('token');

      if (getStorage('token') !== null) {

        newState.isLoggedIn = true;
      } else {

        newState.isLoggedIn = false;
      }
    })()


    setState({
      ...newState
    });
  }

  useEffect(callbackUseEffect, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={state.isLoggedIn ? 'Home' : 'Login'}
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
          />

          <Stack.Screen
            name='Registration'
            component={Registration}
            options={
              {
                title: 'Registration',
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
            name='Login'
            component={Login}
            options={
              {
                title: 'Login',
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
              {headerShown: false}
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