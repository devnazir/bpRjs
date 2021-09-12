import "../rootPage.css";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

function AdminPage() {
  const handleClickLink = (e, toSubDomain) => {
    e.preventDefault();
    if (toSubDomain) {
      return window.open(`http://${toSubDomain}.localhost:3000`, "_self");
    }

    window.open(`http://localhost:3000`, "_self");
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="App-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/" onClick={(e) => handleClickLink(e, "admin")}>
                Admin
              </Link>
            </li>
            <li>
              <Link to="/" onClick={(e) => handleClickLink(e)}>
                Root
              </Link>
            </li>
          </ul>
        </nav>
        <img src={logo} alt="logo" className="App-logo" />
        <p>Admin</p>
      </header>
    </div>
  );
}

export default AdminPage;
