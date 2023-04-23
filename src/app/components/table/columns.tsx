import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
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
];
