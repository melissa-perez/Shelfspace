import { NavLink } from 'react-router';

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
