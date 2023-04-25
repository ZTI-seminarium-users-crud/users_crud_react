import { useEffect } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

import { StudentListFilterConfig } from "./const";
import StudentFiltersSection from "./section";
import { StudentListFilterFormValues } from "./types";
import {
  getStudentListFilterFormInitialValues,
  useStudentListFilterQueryParams,
} from "./utils";

const StudentListFilters = () => {
  const [queryParams, setQueryParams] = useStudentListFilterQueryParams();
  const methods = useForm({
    defaultValues: getStudentListFilterFormInitialValues(
      StudentListFilterConfig,
      queryParams
    ),
  });

  const { control } = methods;

  const watchAll = useWatch<StudentListFilterFormValues>({ control });

  useEffect(() => {
    setQueryParams(
      Object.entries(watchAll).reduce((previousValue, [key, value]) => {
        const selected =
          (value &&
            Object.entries(value)
              .filter(([_, value]) => !!value)
              .map(([name]) => name)) ??
          [];
        return {
          ...previousValue,
          [key]: selected.length > 0 ? selected : undefined,
        };
      }, {})
    );
  }, [watchAll]);

  return (
    <FormProvider {...methods}>
      <form>
        {StudentListFilterConfig.map((section) => (
          <StudentFiltersSection key={section.name} {...section} />
        ))}
      </form>
    </FormProvider>
  );
};

export default StudentListFilters;
