export type StudentListFilterValue = {
  name: string;
  value: string | number;
};

export type StudentListFilterSection = {
  display_name: string;
  name: string;
  values: StudentListFilterValue[];
};

export type StudentListFilterFields = StudentListFilterSection[];

export type StudentListFilterFormValues = Record<
  string,
  Record<string, boolean>
>;
