import { Link, useNavigate  } from "react-router-dom";
const MiniNavBar = ({ showMiniNavBar, toggleMiniNavBar }) => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
    toggleMiniNavBar();
    
  };
  
  // const handleLinkClick = (destination) => {
  //   // Navigate to the destination
  //   // console.log(navigate);
  //   // console.log(destination);
  //   navigate.push(destination);
  //   // Close the MiniNavBar
  //   toggleMiniNavBar();
  // };
  return (
    <div className={`mini-nav-bar ${showMiniNavBar ? 'show' : ''}`} >
      <div className="mini-nav-content">
        <span>
          <Link to="profile" className="login-link" onClick={toggleMiniNavBar}>
            Profile
          </Link>
        </span>
        <span>
          {!auth ? (
            <Link to="login" className="login-link"  onClick={toggleMiniNavBar}>
              Login
            </Link>
          ) : (
            <Link  to="login" className="login-link" onClick={logOut}>
              log out
            </Link>
          )}
        </span>
        <span>
          <Link to="vans" className="login-link" onClick={toggleMiniNavBar}>
            Host vans
          </Link>
        </span>
        <span>
          <Link to="dashboard" className="login-link" onClick={toggleMiniNavBar}>
            Dashboard
          </Link>
        </span>
        <span>
          <Link to="setting" className="login-link" onClick={toggleMiniNavBar}>
            setting
          </Link>
        </span>
      </div>
      <span className="close-btn" onClick={toggleMiniNavBar}>
        &#215;
      </span>
    </div>
  );
};
export default MiniNavBar;
