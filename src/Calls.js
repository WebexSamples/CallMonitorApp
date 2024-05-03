import CallStateFlow from './CallStateFlow';

function Call({ call, onShow }) {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          {call.customer?.profilePicture ? (
            <img
              src={call.customer.profilePicture}
              alt="Caller Profile"
              className="profile-image"
            />
          ) : (
            <i className="material-icons avatar-icon">person</i>
          )}
          <a
            className="btn-floating halfway-fab waves-effect waves-light red"
            onClick={() => onShow(call.customer)}
          >
            <i className="material-icons">search</i>
          </a>
        </div>
        <div className="card-content">
          <CallStateFlow callState={call.state} />
          <hr />
          <p>
            <b>Call Type:</b> {call.callType}
          </p>
          <p>
            <b>Remote Participants:</b>{' '}
            {call.remoteParticipants
              .map((rp) => `${rp.callerID} (${rp.name})`)
              .join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}

function Calls({ calls, onShow }) {
  return (
    <div>
      <h3>Current Calls</h3>
      <div>
        <div className="row">
          {calls.map((call) => (
            <Call call={call} key={call.id} onShow={onShow} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calls;
