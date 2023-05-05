/* global webex */
import { useEffect, useState } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Calls from './Calls';
import Events from './Events';
import Simulate from './Simulate';

function App() {
  const [calls, setCalls] = useState([]);
  const [callEvents, setCallEvents] = useState([]);
  const [webexApp, setWebexApp] = useState(false);

  function handleNewCallEvent(callData) {
    const callEventData = {
      ...callData,
      eventTimeStamp: new Date()
    }
    // Add Call Event to Event collection
    setCallEvents((prevEvents) => [callEventData, ...prevEvents]);

    // Update Call Data in Calls collection
    setCalls((prevCalls) => {
      const objToUpdate = prevCalls.find(obj => obj.id === callEventData.id);
      let updatedCalls;
      if (objToUpdate) {
        // Update existing Call
        updatedCalls = prevCalls.map(call => {
          if (call.id === callEventData.id) {
            return callEventData;
          }
          return call;
        });
      }

      if (!objToUpdate) {
        updatedCalls = [...prevCalls];
        updatedCalls.push(callEventData);
      }

      return updatedCalls;
    });
  }

  useEffect(() => {
    async function initializeWebex() {
      const app = new webex.Application();
      setWebexApp(app);
      await app.onReady();
      console.log('Webex SDK Ready');
      await app.listen();
      console.log('Adding call listener');
      app.on('sidebar:callStateChanged', (callData) => {
        handleNewCallEvent(callData);
      });
    }

    if (!webexApp) {
      initializeWebex();
    }
  }, [webexApp]);

  function handleSimulate(number) {
    // Create simulated call event
    const call = {
      callType: "Placed",
      "id": Date.now(),
      "localParticipant":{
        "callerID":"",
        "isMuted":true,
        "name":"You"
      },
      "remoteParticipants":[
        {
          "callerID":number,
          "name":"Simulated Caller"
        }
      ],
      "state":"Started"
    };
    handleNewCallEvent(call);
  }

  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Webex Calling Status</a>
        </div>
      </nav>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <div className="row center">
            <Calls calls={calls} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <Events events={callEvents} />
            </div>
            <div className="col s12 m4"></div>
            <div className="col s12 m4"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <Simulate onClick={handleSimulate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
