import { QueryParamConfig } from "serialize-query-params/src/types";
import { ArrayParam, useQueryParams, withDefault } from "use-query-params";

import { ReadStudentsQueryVariables } from "../../../query.ts";

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
  options: Record<string, string | number>
) =>
  Object.entries(options).map(([key, value]) => ({
    name: key,
    value,
  })) satisfies StudentListFilterValue[];

export const useStudentListFiltersQueryParams = () =>
  useQueryParams<
    {
      columns: string;
      specialization: string;
      degree: string;
      semester: string;
    },
    {
      columns: QueryParamConfig<string[] | undefined>;
      specialization: QueryParamConfig<
        ReadStudentsQueryVariables["specialization"]
      >;
      degree: QueryParamConfig<ReadStudentsQueryVariables["degree"]>;
      semester: QueryParamConfig<ReadStudentsQueryVariables["semester"]>;
    }
  >(
    StudentListFilterConfig.reduce(
      (queryParams, section) => ({
        ...queryParams,
        [section.name]:
          section.name === "columns"
            ? withDefault(ArrayParam, [
                "first_name",
                "last_name",
                "specialization",
                "degree",
                "semester",
                "is_male",
                "average_grade",
                "hair_color",
                "height",
                "weight",
                "age",
              ])
            : ArrayParam,
      }),
      {
        columns: "",
        specialization: "",
        degree: "",
        semester: "",
      }
    ),
    { removeDefaultsFromUrl: true }
  );
