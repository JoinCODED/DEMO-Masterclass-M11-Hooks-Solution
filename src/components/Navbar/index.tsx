import { Link } from "react-router-dom";

import "./style.scss";

const Navbar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">HR System</Link>
        </li>
        <li>
          <Link to="/employees">Employee</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
