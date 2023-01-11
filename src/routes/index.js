import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";

const RouteWrapper = () => {
  const routes = useRoutes(ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();
  return (
      <RouteWrapper key={location.pathname} />
  );
};

export default Pages;
