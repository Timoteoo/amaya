import { Link } from "react-router-dom";

import "../styles/navbar.scss";

export const Navbar = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e04a7e"
          fillOpacity="1"
          d="M0,288L120,240C240,192,480,96,720,85.3C960,75,1200,149,1320,186.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <header id="navbar">
        <div>
          <h1>Amaya</h1>
        </div>

        <ul>
          <li>
            <Link to="/">Create Profile</Link>
            <div className="mini-bar" />
          </li>
          <li>
            <Link to="/profile">My profile</Link>
            <div className="mini-bar" />
          </li>
        </ul>
      </header>
    </div>
  );
};
