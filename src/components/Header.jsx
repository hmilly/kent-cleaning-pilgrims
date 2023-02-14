import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li id='header-h1'>
            <Link to="/">KENT CLEANING PILGRIMS LTD.</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;