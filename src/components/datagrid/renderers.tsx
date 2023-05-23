import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

export const BooleanColumnRenderer = (
  params: GridRenderCellParams<GridValidRowModel, boolean>
) => {
  return params.value ? "Yes" : "No";
};
