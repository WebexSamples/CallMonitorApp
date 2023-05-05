/**
 * Represents a phone call object.
 * @typedef {Object} Call
 * @property {string} callType - The type of the call, e.g. "Placed", "Received", "Missed".
 * @property {string} id - The unique identifier for the call.
 * @property {Participant} localParticipant - The local participant in the call.
 * @property {Participant[]} remoteParticipants - An array of remote participants in the call.
 * @property {string} state - The current state of the call, e.g. "Connected", "Disconnected".
 * @property {string} eventTimeStamp - The timestamp for when the call event occurred.
 *
 * @example
 * // Example call object
 * const call = {
 *   callType: "Placed",
 *   id: "89e0609a-c561-4384-9b05-1d7dc7dde80d",
 *   localParticipant: {
 *     callerID: "+1555-201-8357",
 *     isMuted: true,
 *     name: "Local Caller"
 *   },
 *   remoteParticipants: [
 *     {
 *       callerID: "5551230432",
 *       name: "Remote Caller"
 *     }
 *   ],
 *   state: "Connected",
 *   eventTimeStamp: "2023-04-21T16:38:28.007Z"
 * };
 */

/**
 * Represents a participant in a call.
 * @typedef {Object} Participant
 * @property {string} callerID - The phone number of the participant.
 * @property {boolean} isMuted - Whether the participant is currently muted or not.
 * @property {string} name - The name of the participant.
 */
