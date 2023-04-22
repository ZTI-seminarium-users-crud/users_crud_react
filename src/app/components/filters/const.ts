import { UserDegrees, UserSemesters, UserSpecializations } from "user/const";

import { FilterFields } from "./types";
import { getFilterValuesFromRecord } from "./utils";

export const UserFilterConfig = [
  {
    display_name: "Specialization",
    name: "specialization",
    values: getFilterValuesFromRecord(UserSpecializations),
  },
  {
    display_name: "Degree",
    name: "degree",
    values: getFilterValuesFromRecord(UserDegrees),
  },
  {
    display_name: "Semester",
    name: "semester",
    values: getFilterValuesFromRecord(UserSemesters),
  },
] satisfies FilterFields;
