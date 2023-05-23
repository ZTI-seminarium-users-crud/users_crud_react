import { DataGrid } from "@mui/x-data-grid";

import { useReadStudentsQuery } from "../../../query.ts";
import { useStudentListFiltersQueryParams } from "../filters/utils";

import useStudentListColumns from "./columns";
import { useStudentListTablePagination } from "./utils";

const StudentListTable = () => {
  const { limit, offset, paginationModel, handlePaginationModelChange } =
    useStudentListTablePagination();
  const [filtersParams] = useStudentListFiltersQueryParams();
  const columns = useStudentListColumns(filtersParams.columns ?? []);

  const { loading, error, data } = useReadStudentsQuery(
    {
      limit,
      offset,
      specialization: filtersParams.specialization,
      degree: filtersParams.degree,
      semester: filtersParams.semester,
    },
    filtersParams.columns
  );

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
      pageSizeOptions={[10, 20, 50, 100]}
      rowCount={data.readStudents.total_count}
    />
  );
};

export default StudentListTable;
