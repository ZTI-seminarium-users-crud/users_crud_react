import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string | number;
};

const FormCheckbox: React.FC<Props> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field: { value, ...fieldProps } }) => (
            <Checkbox checked={value} {...fieldProps} />
          )}
        />
      }
    />
  );
};

export default FormCheckbox;
