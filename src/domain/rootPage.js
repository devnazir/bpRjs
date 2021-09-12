import "./rootPage.css";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { getSubDomain } from "@/utils/helpers/getSubDomain.helper";
import AdminPage from "./sub/AdminPage";

function Home() {
  const handleClickLink = (e, toSubDomain) => {
    e.preventDefault();
    if (toSubDomain) {
      return window.open(`http://${toSubDomain}.localhost:3000`, "_self");
    }

    window.open(`http://localhost:3000`, "_self");
  };

  const subDomain = getSubDomain();

  if (subDomain && subDomain === "admin") {
    return <AdminPage />;
  }

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
        <p>
          Edit text at <span className="App-link">domain/rootPage.js</span>
        </p>
      </header>
    </div>
  );
}

export default Home;
