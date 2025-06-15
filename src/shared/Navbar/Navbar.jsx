import { NavLink } from 'react-router';

import '../../../src/index.css';
import navbarStyles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={`container ${navbarStyles.navbarContainer}`}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
