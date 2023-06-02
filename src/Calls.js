import CallStateFlow from "./CallStateFlow";

function Call({call, onShow}) {
  return (
    <div className="row">
      <div className="col s12 m6 l4 xl3">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Call Information</span>
            <p><b>Call Type:</b> {call.callType}</p>
            <p><b>ID:</b> {call.id}</p>
            <p><b>Local Participant:</b> {call.localParticipant.callerID} ({call.localParticipant.name}) - {call.localParticipant.isMuted ? 'Muted' : 'Not Muted'}</p>
            <p><b>Remote Participants:</b> {call.remoteParticipants.map(rp => `${rp.callerID} (${rp.name})`).join(', ')}</p>
            <p><b>Last Update:</b> {call.eventTimeStamp?.toString()}</p>
          </div>
          <div className="card-action">
            <button className="waves-effect waves-light btn" onClick={onShow}>
              Search Remote Caller
            </button>
          </div>
          <div className="card-action">
            <CallStateFlow callState={call.state} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Calls({calls, onShow}) {
  return (
    <div>
      <h2>Current Calls</h2>
      <div>
        {calls.map((call) => (
          <Call call={call} key={call.id} onShow={onShow} />
        ))}
      </div>
    </div>
  );
}

export default Calls;
