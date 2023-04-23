import { GridPaginationModel } from "@mui/x-data-grid";
import { useEffect } from "react";
import { NumberParam, useQueryParams, withDefault } from "use-query-params";

export const useTablePagination = () => {
  const [tableParams, setTableParams] = useQueryParams({
    page: withDefault(NumberParam, 1),
    limit: withDefault(NumberParam, 10),
  });

  // add default params to url on render
  useEffect(() => {
    setTableParams(tableParams);
  }, []);

  const limit = tableParams.limit;
  const offset = (tableParams.page - 1) * tableParams.limit;

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setTableParams({
      limit: model.pageSize,
      page: paginationModel.pageSize === model.pageSize ? model.page + 1 : 1,
    });
  };

  const paginationModel: GridPaginationModel = {
    pageSize: tableParams.limit,
    page: tableParams.page - 1,
  };

  return {
    limit,
    offset,
    paginationModel,
    handlePaginationModelChange,
  };
};
