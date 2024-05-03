import React from 'react';
import './CallStateFlow.css'; // Import the CSS file for styling

const CallStateFlow = ({ callState }) => {
  const getSegmentClass = (segmentState) => {
    return callState === segmentState
      ? 'progress-segment active'
      : 'progress-segment';
  };

  const getStateLabel = (callState) => {
    switch (callState) {
      case 'Started':
        return 'Started';
      case 'Connecting':
        return 'Connecting...';
      case 'Connected':
        return 'Connected';
      case 'Disconnecting':
        return 'Disconnecting...';
      case 'Disconnected':
        return 'Disconnected';
      case 'Rejected':
        return 'Rejected';
      case 'Hold':
        return 'on Hold';
      case 'Ended':
        return 'Ended';
      default:
        return '';
    }
  };

  return (
    <div className="call-state-flow">
      <div className="progress-bar">
        <div className={getSegmentClass('Started')}></div>
        <div className={getSegmentClass('Connecting')}></div>
        <div className={getSegmentClass('Connected')}></div>
        <div className={getSegmentClass('Hold')}></div>
        <div className={getSegmentClass('Disconnecting')}></div>
        <div className={getSegmentClass('Disconnected')}></div>
        <div className={getSegmentClass('Rejected')}></div>
        <div className={getSegmentClass('Ended')}></div>
      </div>
      <div className="state-label">{getStateLabel(callState)}</div>
    </div>
  );
};

export default CallStateFlow;
