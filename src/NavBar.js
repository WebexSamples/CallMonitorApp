import { useEffect } from 'react';
import M from 'materialize-css';

function NavBar({webexApp}) {
  useEffect(() => {
    // Initialize the Dropdown
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, { constrainWidth: false });
  }, []);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Webex Calling Sidebar App</a>
        <ul className="right valign-wrapper" style={{ display: 'flex', height: '100%' }}>
          <li>
            <button
              className="dropdown-trigger btn-flat valign-wrapper"
              data-target="profile-dropdown"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <i className="material-icons left">account_circle</i> Profile
              <i className="material-icons right">arrow_drop_down</i>
            </button>
          </li>
        </ul>
      </div><ul id="profile-dropdown" className="dropdown-content">
        {/* Dropdown Content */}
        <li>
          <span>Username: {webexApp?.application?.states?.user?.displayName}</span>
        </li>
        <li>
          <span>Email: {webexApp?.application?.states?.user?.email}</span>
        </li>
        <li>
          <span>Org ID: {webexApp?.application?.states?.user?.orgId}</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
