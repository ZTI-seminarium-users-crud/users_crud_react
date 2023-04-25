import { useRoutes } from "react-router-dom";

import { routeObjects } from "./routes";

const App = () => {
  const appRoutes = useRoutes(routeObjects);

  return appRoutes;
};

export default App;
