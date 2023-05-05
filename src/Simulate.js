import { useState } from "react";

export default function Simulate({onClick}) {

  const [number, setnumber] = useState('');

  function handleNumberChange(e) {
    setnumber(e.target.value);
  }

  function handleSubmit() {
    onClick(number);
  }

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Simulate Incoming Call</span>
        <div className="row">
          <div className="input-field col s12">
            <input id="phone" type="tel" className="validate" value={number} onChange={handleNumberChange} />
            <label htmlFor="phone">Phone Number</label>
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
