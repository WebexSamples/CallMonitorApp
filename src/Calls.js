function Call({call}) {
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
            <p><b>State:</b> {call.state}</p>
            <p><b>Last Update:</b> {call.eventTimeStamp?.toString()}</p>
          </div>
          <div className="card-action">
            <a href={`https://www.google.com/search?q=${call.remoteParticipants[0].callerID}`}>Search Remote Caller</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Calls({calls}) {
  return (
    <div>
      <h2>Current Calls</h2>
      <div>
        {calls.map((call) => (
          <Call call={call} key={call.id} />
        ))}
      </div>
    </div>
  );
}

export default Calls;
