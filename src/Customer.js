export default function Customer({ customer }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="row">
          <div className="col s3">
            <div className="profile-picture">
              <img
                src={customer.profilePicture}
                alt={`${customer.firstName} ${customer.lastName}`}
              />
            </div>
          </div>
          <div className="col s9">
            <span className="card-title">
              {customer.firstName} {customer.lastName}
            </span>
            <p className="valign-wrapper">
              <i className="material-icons" style={{ marginRight: '8px' }}>
                email
              </i>{' '}
              {customer.email}
            </p>
            <p className="valign-wrapper">
              <i className="material-icons" style={{ marginRight: '8px' }}>
                phone
              </i>{' '}
              {customer.phone}
            </p>
            <p className="valign-wrapper">
              <i className="material-icons" style={{ marginRight: '8px' }}>
                location_on
              </i>
              {customer.address.line1}
              <br />
              {customer.address.line2 && (
                <>
                  {customer.address.line2}
                  <br />
                </>
              )}
              {customer.address.city}, {customer.address.state}{' '}
              {customer.address.zip}
            </p>
          </div>
        </div>
        <div className="card-action">
          <span className="valign-wrapper">
            <i className="material-icons" style={{ marginRight: '8px' }}>
              edit
            </i>
            {customer.notes}
          </span>
          <br />
          <span className="valign-wrapper">
            <i className="material-icons" style={{ marginRight: '8px' }}>
              access_time
            </i>
            Created: {new Date(customer.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
