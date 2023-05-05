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

/**
 * Customer object with contact and demographic information
 * @typedef {Object} Customer
 * @property {string} id - Unique identifier for the customer.
 * @property {string} firstName - First name of the customer.
 * @property {string} lastName - Last name of the customer.
 * @property {string} email - Email address of the customer.
 * @property {string} phone - Phone number of the customer.
 * @property {Object} address - Address of the customer.
 * @property {string} address.line1 - First line of the customer's address.
 * @property {string} address.line2 - Second line of the customer's address.
 * @property {string} address.city - City of the customer's address.
 * @property {string} address.state - State of the customer's address.
 * @property {string} address.zip - ZIP code of the customer's address.
 * @property {string} notes - Additional notes about the customer.
 * @property {string} createdAt - Date and time the customer was created in ISO format.
 * @property {string} updatedAt - Date and time the customer was last updated in ISO format.
 *
 * @example
 * // Example usage:
 * const customer = {
 *   id: "12345",
 *   firstName: "John",
 *   lastName: "Doe",
 *   email: "johndoe@example.com",
 *   phone: "+1 555-555-5555",
 *   address: {
 *     line1: "123 Main St",
 *     line2: "",
 *     city: "Anytown",
 *     state: "CA",
 *     zip: "12345"
 *   },
 *   notes: "This customer is interested in our premium plan",
 *   createdAt: "2022-01-01T12:00:00.000Z",
 *   updatedAt: "2022-02-15T09:30:00.000Z"
 * };
 */
