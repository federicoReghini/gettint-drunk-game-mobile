import React, { useEffect } from 'react';

// library
import { getStorage, JoinLobbyNf } from 'gettint-drunk';

// navigation
import { playFastUser } from 'gettint-drunk/dist/services/api/userapi';
import { deleteApi } from 'gettint-drunk/dist/services/genericServices';
import { eventEmit } from 'gettint-drunk';
import { eventOn } from 'gettint-drunk';
import { createLobby } from 'gettint-drunk/dist/services/api/lobbyapi';
import { editLobby } from 'gettint-drunk/dist/services/api/lobbyapi';
import { connectWS } from 'gettint-drunk';
import { getMessage, sendMessage } from 'gettint-drunk/dist/services/genericWebSocket';
var WS = new WebSocket('ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws')

let id;
let token;
let lobby;
let connectionEstablished;


(async () => {
  token = await getStorage('token')
  await deleteApi('lobby', token)
  id = await getStorage('user');

})()

function JoinLobby({ navigation }) {


  const sendMessage = (message) => {
    WS.send(JSON.stringify(message));
  }


  useEffect(() => {
    // WS.onopen = () => {
    //   console.log("CONNECTED");
    // }
    WS.onmessage = (event) => {
      console.log('onmessage', JSON.parse(event.data));
      eventEmit('lobby', event.data)
      lobby = JSON.parse(event.data)
    }

    editLobby(114, null, token).then(response => {

      WS.onopen = () => {
        console.log("CONNECTED");
      }

      connectionEstablished = false;
      setTimeout(() => {
        if (WS != null) {
          const message = {
            user_id: id,
            method: "connectLobby"
          }
          sendMessage(message);
          connectionEstablished = true;
        }
      }, 1000);
    })

  }, [])

  const handleNavigation = () => {
    navigation.navigate(routes.GAME);
  }


  return (
    <JoinLobbyNf onStartMatch={handleNavigation} id={id} />
  )
}

export default JoinLobby