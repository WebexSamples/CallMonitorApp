function Events({ events }) {
  return (
    <div>
      <h4>Calling Events</h4>
      <ul className="collection">
        {events.map((e, index) => (
          <li className="collection-item" key={index}>
            <code>{JSON.stringify(e)}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
