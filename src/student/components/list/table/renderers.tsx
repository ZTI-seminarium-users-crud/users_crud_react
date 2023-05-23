import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";

import Routes from "routes";
import { useNavigateAndKeepSearchParams } from "routes/utils";

import { useDeleteStudent } from "../../../mutation.ts";
import { Student } from "../../../types.ts";

type Props = {
  params: GridRenderCellParams<Student>;
};

export const StudentListActionColumnRenderer: React.FC<Props> = ({
  params,
}) => {
  const navigate = useNavigateAndKeepSearchParams();
  const { handleDelete: deleteStudent } = useDeleteStudent();

  const handleDelete = () => {
    deleteStudent(params.id.toString());
  };

  const handleEdit = () => {
    navigate(Routes.StudentEdit(params.id.toString()));
  };

  return (
    <div>
      <IconButton onClick={handleDelete} color="error" aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={handleEdit} color="primary" aria-label="edit">
        <EditIcon />
      </IconButton>
    </div>
  );
};
