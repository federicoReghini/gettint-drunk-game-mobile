import React, { useEffect, useState } from 'react';

// library
import { getStorage, JoinLobbyNf, LobbyContainer } from 'gettint-drunk';

// navigation
import { playFastUser } from 'gettint-drunk/dist/services/api/userapi';
import { deleteApi } from 'gettint-drunk/dist/services/genericServices';
import { eventEmit } from 'gettint-drunk';
import { eventOn } from 'gettint-drunk';
import { createLobby, editLobby } from 'gettint-drunk/dist/services/api/lobbyapi';
import { connect, sendMessage } from '../webSocket/genericWebSocket';

let id;
let token;
let lobby;
let connectionEstablished;

function JoinLobby() {

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

      connect(id);

      editLobby(101, null,token).then(response => {
        lobby = response?.data;

        connectionEstablished = false;
        setTimeout(() => {
            const message = {
              user_id: id,
              method: "connectLobby"
            }
            sendMessage(message);
            connectionEstablished = true;
        }, 1000);
      })
    })()

  }, [])

  const handleNavigation = () => {
    const message = {
      user_id: id,
      method: "startMatch"
    }
    sendMessage(message);
    // navigate(routes.GAME, {state: {lobbyId: lobby.idLobby}});
    setState({
      ...state,
      isMatch: true
    })
  }


  return (
    <>
      {
        !state.isMatch ?
          <JoinLobbyNf onStartMatch={handleNavigation} id={id} />
          :
          <LobbyContainer lobbyId={lobby.idLobby} />
      }
    </>
  )
}

export default JoinLobby