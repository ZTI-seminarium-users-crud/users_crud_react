import { useEffect } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

import { UserFilterConfig } from "./const";
import UserFiltersSection from "./section";
import { FilterFormValues } from "./types";
import { getFilterFormInitialValues, useFilterQueryParams } from "./utils";

const UserFilters = () => {
  const [queryParams, setQueryParams] = useFilterQueryParams();
  const methods = useForm({
    defaultValues: getFilterFormInitialValues(UserFilterConfig, queryParams),
  });

  const { control } = methods;

  const watchAll = useWatch<FilterFormValues>({ control });

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
        {UserFilterConfig.map((section) => {
          return <UserFiltersSection key={section.name} {...section} />;
        })}
      </form>
    </FormProvider>
  );
};

export default UserFilters;
