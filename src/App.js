import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routes, RouteWithSubRoutes } from "./routes/index";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes {...route} key={i} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
