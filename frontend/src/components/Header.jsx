import { NavLink, Link, Navigate } from "react-router-dom";
import userIcon from "../assets/images/avatar-icon.png";
import logoutIcon from "../assets/images/logout.png";
import MiniNavBar from "./MiniNavBar";
import { useState } from "react";
const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const [showMiniNavBar, setShowMiniNavBar] = useState(false);

  const toggleMiniNavBar = () => {
    setShowMiniNavBar(!showMiniNavBar);
  };
 

  return (
    <header>
      <Link to="/" className="site-logo">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
          // style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
          // style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="Vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
          // style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
      </nav>
      <img src={userIcon} className="login-icon" onClick={toggleMiniNavBar} />
      <MiniNavBar
        showMiniNavBar={showMiniNavBar}
        toggleMiniNavBar={toggleMiniNavBar}
      />

      {/* <button onClick={logOut}>X</button> */}
    </header>
  );
};
export default Header;
