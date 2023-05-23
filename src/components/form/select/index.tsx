import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

import { Option } from "utils/form.ts";

type Props = Omit<SelectProps, "name"> & {
  name: string;
  options: Option[];
};

const SelectField: React.FC<Props> = ({ name, label, options, ...props }) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <FormControl error={!!error}>
        {label && <InputLabel id={name + "label"}>{label}</InputLabel>}

        <Select
          error={!!error?.message}
          label={label}
          labelId={name + "label"}
          {...field}
          {...props}
        >
          {options.map(({ value, label }) => {
            // console.log(value);
            return (
              <MenuItem key={value} value={value.toString()}>
                {label}
              </MenuItem>
            );
          })}
        </Select>

        {error?.message && (
          <FormHelperText error>{error.message}</FormHelperText>
        )}
      </FormControl>
    )}
  />
);

export default SelectField;
