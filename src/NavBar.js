import { useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

function NavBar({ userProfile, onSimulate }) {
  useEffect(() => {
    // Initialize the Dropdown
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, { constrainWidth: false });
  }, []);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Webex Calling Sidebar App
        </a>
        <ul className="right valign-wrapper">
          <li>
            <a
              onClick={onSimulate}
              className="waves-effect waves-light btn valign-wrapper"
            >
              Simulate <i className="material-icons right">phone</i>
            </a>
          </li>
        </ul>
        <ul
          className="right valign-wrapper"
          style={{ display: 'flex', height: '100%' }}
        >
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
      </div>
      <ul id="profile-dropdown" className="dropdown-content">
        {/* Dropdown Content */}
        <li>
          <span>Username: {userProfile.displayName}</span>
        </li>
        <li>
          <span>Email: {userProfile.email}</span>
        </li>
        <li>
          <span>Org ID: {userProfile.orgId}</span>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  onSimulate: PropTypes.func.isRequired,
  userProfile: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    orgId: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavBar;
