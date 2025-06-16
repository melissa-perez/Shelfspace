import { NavLink } from 'react-router';

import '../../../src/index.css';
import navbarStyles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={`container ${navbarStyles.navbarContainer}`}>
      <nav className={navbarStyles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            if (isActive) return navbarStyles.active;
            return navbarStyles.inactive;
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => {
            if (isActive) return navbarStyles.active;
            return navbarStyles.inactive;
          }}
        >
          Bookshelf
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
