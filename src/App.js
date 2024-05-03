import { useEffect, useRef, useState } from 'react';
import M from 'materialize-css';

import generateCustomer from './generateCustomer';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import NavBar from './NavBar';
import Calls from './Calls';
import Events from './Events';
import Simulate from './Simulate';
import Customer from './Customer';

function App() {
  const [calls, setCalls] = useState([]);
  const [callEvents, setCallEvents] = useState([]);
  const [webexApp, setWebexApp] = useState(false);
  const [webexAppUser, setWebexAppUser] = useState({
    displayName: '',
    email: '',
    orgId: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [showSimulateModal, setShowSimulateModal] = useState(false);
  const [modalCustomer, setModalCustomer] = useState();
  const modalRef = useRef(null);
  const simulateModalRef = useRef(null);

  function handleNewCallEvent(callData) {
    const callEventData = {
      ...callData,
      eventTimeStamp: new Date(),
    };

    // Add Call Event to Event collection
    setCallEvents((prevEvents) => [callEventData, ...prevEvents]);

    // Update Call Data in Calls collection
    setCalls((prevCalls) => {
      const objToUpdate = prevCalls.find((obj) => obj.id === callEventData.id);
      let updatedCalls;
      if (objToUpdate) {
        // Update existing Call
        updatedCalls = prevCalls.map((call) => {
          if (call.id === callEventData.id) {
            // Merge Call Event into existing Call record
            return {
              ...call,
              ...callEventData,
            };
          }
          return call;
        });
      }

      if (!objToUpdate) {
        updatedCalls = [...prevCalls];
        if (!callEventData.customer) {
          // Add Fake Customer Data
          callEventData.customer = generateCustomer();
        }

        updatedCalls.push(callEventData);
      }

      return updatedCalls;
    });
  }

  // Make sure the customer modal element exists before performing an action on it
  useEffect(() => {
    if (modalRef.current && showModal) {
      const instance = M.Modal.init(modalRef.current, {});
      instance.open();
    }
  }, [modalRef, showModal]);

  // Make sure the simulate modal element exists before performing an action on it
  useEffect(() => {
    if (simulateModalRef.current && showSimulateModal) {
      const instance = M.Modal.init(simulateModalRef.current, {});
      instance.open();
    }
  }, [simulateModalRef, showSimulateModal]);

  // Initialize Webex EA SDK
  useEffect(() => {
    async function initializeWebex() {
      const config = {
        logs: {
          logLevel: 3, //INFO: 0, WARN: 1, ERROR: 2, SILENT: 3
        },
      };
      const app = new window.webex.Application(config);
      try {
        await app.onReady();
        console.log('Webex SDK Ready');
        await app.listen();
        console.log('Adding call listener');
        app.on('sidebar:callStateChanged', (callData) => {
          handleNewCallEvent(callData);
        });

        setWebexApp(app);
        setWebexAppUser(app.application.states.user);
      } catch (error) {
        console.error('Error initializing Webex:', error);
      }
    }

    if (!webexApp) {
      initializeWebex();
    }
  });

  // Monitor the Calls array and update the badge to active calls
  useEffect(() => {
    if (!webexApp) {
      return;
    }
    // Set badge based on # of active calls
    const activeCalls = calls.filter((call) => call.state !== 'Ended');
    const activeCallsCount = activeCalls.length;
    webexApp?.context?.getSidebar().then((sidebar) => {
      console.log(`Setting badge count to: ${activeCallsCount}`);
      // Badges
      sidebar.showBadge({
        badgeType: 'count',
        count: activeCallsCount,
      });
    });
  }, [calls, webexApp]);

  function handleSimulate(number, callState) {
    // Create simulated call event
    const call = {
      callType: 'Placed',
      id: Date.now(),
      localParticipant: {
        callerID: '',
        isMuted: true,
        name: 'You',
      },
      remoteParticipants: [
        {
          callerID: number,
          name: 'Simulated Caller',
        },
      ],
      state: callState || 'Started',
    };
    handleNewCallEvent(call);
    handleHideSimulateModal();
  }

  function handleShowModal(customer) {
    setModalCustomer(customer);
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  function handleToggleSimulateModal() {
    setShowSimulateModal(!showSimulateModal);
  }

  function handleHideSimulateModal() {
    setShowSimulateModal(false);
  }

  return (
    <div className="App">
      <NavBar
        userProfile={webexAppUser}
        onSimulate={handleToggleSimulateModal}
      />
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <div className="row center">
            <Calls calls={calls} onShow={handleShowModal} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12">
              <Events events={callEvents} />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div id="customer-modal" className="modal" ref={modalRef}>
          <div className="modal-content">
            <Customer customer={modalCustomer} />
          </div>
          <div className="modal-footer">
            <button
              onClick={handleHideModal}
              className="modal-close waves-effect waves-green btn-flat"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSimulateModal && (
        <div id="simulate-modal" className="modal" ref={simulateModalRef}>
          <div className="modal-content">
            <Simulate onClick={handleSimulate} />
          </div>
          <div className="modal-footer">
            <button
              onClick={handleHideSimulateModal}
              className="modal-close waves-effect waves-green btn-flat"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
