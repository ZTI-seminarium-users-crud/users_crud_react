import AppDrawer from "components/drawer";

import UserFilters from "./components/filters";

function App() {
  return (
    <div>
      <AppDrawer>
        <UserFilters />
      </AppDrawer>
    </div>
  );
}

export default App;
