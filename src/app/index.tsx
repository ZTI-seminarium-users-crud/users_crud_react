import styled from "styled-components";

import AppDrawer from "components/drawer";

import UserFilters from "./components/filters";
import Table from "./components/table";

function App() {
  return (
    <AppContainer>
      <AppDrawer>
        <UserFilters />
      </AppDrawer>
      <Table />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;
