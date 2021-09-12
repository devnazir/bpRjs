import { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("@domain/rootPage"));

export const routes = [
  {
    path: "/",
    page: Home,
    exact: true,
  },
];

export const RouteWithSubRoutes = (route) => {
  return (
    <Route path={route.path}>
      <route.page routes={route.routes} />
    </Route>
  );
};
