import { DataGrid } from "@mui/x-data-grid";

import { useReadStudentsQuery } from "../../../graphql/query";
import { useStudentListFilterQueryParams } from "../filters/utils";

import columns from "./columns";
import { useStudentListTablePagination } from "./utils";

const StudentListTable = () => {
  const { limit, offset, paginationModel, handlePaginationModelChange } =
    useStudentListTablePagination();
  const [filterParams] = useStudentListFilterQueryParams();

  const { loading, error, data } = useReadStudentsQuery({
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
      rows={data.readStudents.students ?? []}
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
      rowCount={data.readStudents.total_count}
    />
  );
};

export default StudentListTable;
