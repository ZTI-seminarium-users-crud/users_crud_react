import { ArrayParam, useQueryParams } from "use-query-params";

import { StudentListFilterConfig } from "./const";
import {
  StudentListFilterFields,
  StudentListFilterFormValues,
  StudentListFilterValue,
} from "./types";

export const getStudentListFilterFormInitialValues = (
  filters: StudentListFilterFields,
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
  ) satisfies StudentListFilterFormValues;

export const getStudentListFilterValuesFromRecord = (
  options: Record<string, string>
) =>
  Object.entries(options).map(([key, value]) => ({
    name: key,
    value,
  })) satisfies StudentListFilterValue[];

export const useStudentListFilterQueryParams = () =>
  useQueryParams(
    StudentListFilterConfig.reduce(
      (queryParams, section) => ({
        ...queryParams,
        [section.name]: ArrayParam,
      }),
      {}
    )
  );
