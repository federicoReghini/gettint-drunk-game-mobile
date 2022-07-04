import React, { useEffect, useState } from 'react';

// library
import { getStorage, JoinLobbyNf, LobbyContainer } from 'gettint-drunk';

// navigation
import { playFastUser } from 'gettint-drunk/dist/services/api/userapi';
import { deleteApi } from 'gettint-drunk/dist/services/genericServices';
import { eventEmit } from 'gettint-drunk';
import { eventOn } from 'gettint-drunk';
import { createLobby, editLobby } from 'gettint-drunk/dist/services/api/lobbyapi';
import { connect, requestCard, sendMessage, stopPlaying } from '../webSocket/genericWebSocket';

var WS = new WebSocket('ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws');


let id;
let token;
let lobby;

function JoinLobby({ navigation }) {

  const [state, setState] = useState({
    id: null,
    isMatch: false
  })

  useEffect(() => {

    (async () => {
      token = await getStorage('token')
      await deleteApi('lobby', token)
      id = await getStorage('user');
      setState({
        ...state,
        id: id
      })
      console.log(id, state.id);
      connect(id);

      // if (lobby === null) {
      editLobby(62, null, token).then(response => {
        eventOn('lobby', e => {
          lobby = JSON.parse(e)
          console.log('lobby', lobby);
        })
        setTimeout(() => {
          if (WS != null) {
            const message = {
              user_id: id,
              method: "connectLobby"
            }
            sendMessage(message);
          }
        }, 1000);
      })
      // }
    })()

  }, [])

  useEffect(() => {
    eventOn('isMatch', e => {
      if (e === true) {
        navigation.navigate('Game', {
          idLobby: lobby.idLobby,
          idUser: id
        })
      }
    })

  }, [])

  const handleNavigation = () => {
    const message = {
      user_id: id,
      method: "startMatch"
    }
    sendMessage(message);

  }

  const requestCardFunc = () => {
    requestCard(id)
  }

  const stopPlayingFunc = () => {
    stopPlaying(id)
  }

  return (
    <>
      {
        !state.isMatch ?
          <JoinLobbyNf onStartMatch={handleNavigation} id={id} />
          :
          <LobbyContainer lobbyId={lobby.idLobby} userId={id} onRequestCard={requestCardFunc} onStop={stopPlayingFunc} />
      }
    </>
  )
}

export default JoinLobby;