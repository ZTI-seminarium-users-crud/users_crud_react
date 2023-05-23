import { Button, Typography } from "@mui/material";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import styled from "styled-components";

import FormCheckbox from "components/form/checkbox";

import { StudentListFilterValue } from "../types";

type Props = {
  name: string;
  display_name: string;
  values: Array<StudentListFilterValue>;
};

const StudentListFiltersSection: React.FC<Props> = ({
  name,
  display_name,
  values,
}) => {
  const { control, setValue } = useFormContext();

  const watchSection = useWatch({ control, name });
  const showClearFilters =
    name !== "columns" && Object.values(watchSection).some((value) => value);

  const handleClearFilters = () => {
    setValue(
      name,
      Object.fromEntries(
        Object.entries(watchSection).map(([key]) => [key, false])
      )
    );
  };

  return (
    <Section>
      <SectionHeader>
        <SectionName>{display_name}</SectionName>
        {showClearFilters && <ClearButton onClick={handleClearFilters} />}
      </SectionHeader>
      <Checkboxes>
        {values.map((filterValue) => {
          return (
            <FormCheckbox
              key={filterValue.name}
              name={`${name}.${filterValue.name}`}
              label={filterValue.value}
            />
          );
        })}
      </Checkboxes>
    </Section>
  );
};

export default StudentListFiltersSection;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionName = styled(Typography)`
  font-weight: bold;
  font-size: 1.5rem;
`;

const ClearButton = styled(Button).attrs(() => ({
  children: "Clear",
  variant: "contained",
  size: "small",
}))``;

const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
`;
