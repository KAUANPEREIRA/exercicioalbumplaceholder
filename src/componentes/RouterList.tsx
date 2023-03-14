import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";

export const RouterList = () => {
  return useRoutes([{ path: "/", element: <Home /> }]);
};
