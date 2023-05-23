import { useEffect } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import styled from "styled-components";

import { StudentListFilterConfig } from "./const";
import StudentFiltersSection from "./section";
import { StudentListFilterFormValues } from "./types";
import {
  getStudentListFilterFormInitialValues,
  useStudentListFiltersQueryParams,
} from "./utils";

const StudentListFilters = () => {
  const [queryParams, setQueryParams] = useStudentListFiltersQueryParams();
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
      <Form>
        {StudentListFilterConfig.map((section) => (
          <StudentFiltersSection key={section.name} {...section} />
        ))}
      </Form>
    </FormProvider>
  );
};

export default StudentListFilters;

const Form = styled.form`
  padding: 1rem;
`;
