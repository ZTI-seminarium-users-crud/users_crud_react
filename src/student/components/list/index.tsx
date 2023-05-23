import { Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import logo from "assets/react_graphql_apollo.png";
import Drawer from "components/drawer";
import routes from "routes";
import { useNavigateAndKeepSearchParams } from "routes/utils.ts";

import StudentListFilters from "./filters";
import StudentListTable from "./table";

const StudentList: React.FC = () => {
  const navigate = useNavigateAndKeepSearchParams();

  const handleAddClick = () => navigate(routes.StudentAdd());

  return (
    <>
      <Drawer>
        <StudentListFilters />
      </Drawer>
      <StudentListContent>
        <Header>
          <Typography fontWeight="bold">
            React CRUD with GraphQL and Apollo Client
          </Typography>
          <Img />
          <StyledButton
            variant="contained"
            color="success"
            onClick={handleAddClick}
            size="large"
          >
            Add student
          </StyledButton>
        </Header>
        <StudentListTable />
      </StudentListContent>
    </>
  );
};

export default StudentList;

const StudentListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

const Img = styled.img.attrs(() => ({
  src: logo,
}))`
  height: 5rem;
  object-fit: contain;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;
