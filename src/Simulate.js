import M from 'materialize-css';
import { useState, useEffect } from 'react';

export default function Simulate({ onClick }) {
  useEffect(() => {
    // Initialize Materialize select dropdown
    const options = {};
    const select = document.querySelector('#callState');
    M.FormSelect.init(select, options);
  }, []);

  const [callState, setCallState] = useState('');
  const [number, setnumber] = useState('');

  function handleCallStateChange(e) {
    const selectedState = e.target.value;
    setCallState(selectedState);
  }

  function handleNumberChange(e) {
    setnumber(e.target.value);
  }

  function handleSubmit() {
    onClick(number, callState);
  }

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Simulate Incoming Call</span>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="phone"
              type="tel"
              className="validate"
              value={number}
              onChange={handleNumberChange}
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select
              id="callState"
              value={callState}
              onChange={handleCallStateChange}
            >
              <option value="" disabled>
                Select a state
              </option>
              <option value="Started">Started</option>
              <option value="Connecting">Connecting</option>
              <option value="Connected">Connected</option>
              <option value="Disconnecting">Disconnecting</option>
              <option value="Disconnected">Disconnected</option>
              <option value="Rejected">Rejected</option>
              <option value="Hold">Hold</option>
              <option value="Ended">Ended</option>
            </select>
            <label htmlFor="callState">Call State</label>
          </div>
        </div>
      </div>
      <div className="card-action">
        <button className="waves-effect waves-light btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
