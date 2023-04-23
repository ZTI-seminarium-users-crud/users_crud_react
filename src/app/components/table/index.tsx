import { DataGrid } from "@mui/x-data-grid";

import { useListStudentsQuery } from "graphql/graphql";

import { useFilterQueryParams } from "../filters/utils";

import { columns } from "./columns";
import { useTablePagination } from "./utils";

const Table = () => {
  const { limit, offset, paginationModel, handlePaginationModelChange } =
    useTablePagination();
  const [filterParams] = useFilterQueryParams();

  const { loading, error, data } = useListStudentsQuery({
    variables: {
      limit,
      offset,
      ...filterParams,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>No data</p>;

  return (
    <DataGrid
      rows={data.listStudents.students ?? []}
      loading={loading}
      columns={columns}
      disableColumnFilter={true}
      disableColumnMenu={true}
      disableColumnSelector={true}
      disableRowSelectionOnClick={true}
      paginationMode="server"
      paginationModel={paginationModel}
      onPaginationModelChange={handlePaginationModelChange}
      pageSizeOptions={[10, 20, 50]}
      rowCount={data.listStudents.total_count}
    />
  );
};

export default Table;
