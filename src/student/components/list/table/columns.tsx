import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { BooleanColumnRenderer } from "components/datagrid/renderers.tsx";

import { Student } from "../../../types.ts";

import { StudentListActionColumnRenderer } from "./renderers";

const useStudentListColumns = (columns: string[]): GridColDef[] => {
  return [
    { field: "id", headerName: "Id", sortable: false, flex: 1 },
    { field: "first_name", headerName: "First name", sortable: false, flex: 1 },
    { field: "last_name", headerName: "Last name", sortable: false, flex: 1 },
    {
      field: "specialization",
      headerName: "Specialization",
      sortable: false,
      flex: 1,
    },
    { field: "degree", headerName: "Degree", sortable: false, flex: 1 },
    { field: "semester", headerName: "Semester", sortable: false, flex: 1 },
    {
      field: "is_male",
      headerName: "Male",
      sortable: false,
      flex: 1,
      renderCell: BooleanColumnRenderer,
    },
    {
      field: "average_grade",
      headerName: "Average grade",
      sortable: false,
      flex: 1,
    },
    { field: "hair_color", headerName: "Hair color", sortable: false, flex: 1 },
    { field: "height", headerName: "Height", sortable: false, flex: 1 },
    { field: "weight", headerName: "Weight", sortable: false, flex: 1 },
    { field: "age", headerName: "Age", sortable: false, flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params: GridRenderCellParams<Student>) => (
        <StudentListActionColumnRenderer params={params} />
      ),
    },
  ].filter(({ field }) => {
    // always show columns
    if (field === "id" || field === "actions") return true;

    //
    return columns.includes(field);
  });
};

export default useStudentListColumns;
