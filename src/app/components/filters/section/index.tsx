import { Button } from "@mui/material";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

import FormCheckbox from "components/form/checkbox";

import { FilterValue } from "../types";

type Props = {
  name: string;
  display_name: string;
  values: Array<FilterValue>;
};

const UserFiltersSection: React.FC<Props> = ({
  name,
  display_name,
  values,
}) => {
  const { control, setValue } = useFormContext();

  const watchSection = useWatch({ control, name });
  const showClearFilters = Object.values(watchSection).some((value) => value);

  const handleClearFilters = () => {
    setValue(
      name,
      Object.fromEntries(
        Object.entries(watchSection).map(([key]) => [key, false])
      )
    );
  };

  return (
    <div>
      <h1>{display_name}</h1>
      {showClearFilters && <Button onClick={handleClearFilters}>Clear</Button>}
      {values.map((filterValue) => {
        return (
          <FormCheckbox
            key={filterValue.name}
            name={`${name}.${filterValue.name}`}
            label={filterValue.value}
          />
        );
      })}
    </div>
  );
};

export default UserFiltersSection;
