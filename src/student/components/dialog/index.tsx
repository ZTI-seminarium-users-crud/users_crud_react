import { Dialog } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import routes from "routes";
import { useNavigateAndKeepSearchParams } from "routes/utils.ts";

import StudentAddForm from "../form/add.tsx";
import StudentEditForm from "../form/edit.tsx";

const StudentDialog: React.FC = () => {
  const navigate = useNavigateAndKeepSearchParams();
  const { id } = useParams<{ id?: string }>();

  const handleClose = () => {
    navigate(routes.StudentsList());
  };

  return (
    <StyledDialog open={true} onClose={handleClose} maxWidth="xl">
      {!id && <StudentAddForm />}
      {id && <StudentEditForm id={id} />}
    </StyledDialog>
  );
};

export default StudentDialog;

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    padding: 3rem;
  }
`;
