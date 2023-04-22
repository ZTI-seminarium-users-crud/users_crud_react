export type FilterValue = {
  name: string;
  value: string;
};

export type FilterSection = {
  display_name: string;
  name: string;
  values: FilterValue[];
};

export type FilterFields = FilterSection[];

export type FilterFormValues = Record<string, Record<string, boolean>>;
