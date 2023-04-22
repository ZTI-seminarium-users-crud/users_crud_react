import { ArrayParam, useQueryParams } from "use-query-params";

import { UserFilterConfig } from "./const";
import { FilterFields, FilterFormValues, FilterValue } from "./types";

export const getFilterFormInitialValues = (
  filters: FilterFields,
  queryParams?: Record<string, string[] | undefined>
) =>
  filters.reduce(
    (initialValues, section) => ({
      ...initialValues,
      [section.name]: section.values.reduce(
        (previousValue, filterValue) => ({
          ...previousValue,
          [filterValue.name]: !!queryParams?.[section.name]?.includes(
            filterValue.name
          ),
        }),
        {}
      ),
    }),
    {}
  ) satisfies FilterFormValues;

export const getFilterValuesFromRecord = (options: Record<string, string>) =>
  Object.entries(options).map(([key, value]) => ({
    name: key,
    value,
  })) satisfies FilterValue[];

export const useFilterQueryParams = () =>
  useQueryParams(
    UserFilterConfig.reduce(
      (queryParams, section) => ({
        ...queryParams,
        [section.name]: ArrayParam,
      }),
      {}
    )
  );
