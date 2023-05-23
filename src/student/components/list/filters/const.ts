import {
  StudentDegrees,
  StudentFields,
  StudentSemesters,
  StudentSpecializations,
} from "student/const";

import { StudentListFilterFields } from "./types";
import { getStudentListFilterValuesFromRecord } from "./utils";

export const StudentListFilterConfig = [
  {
    display_name: "Columns",
    name: "columns",
    values: getStudentListFilterValuesFromRecord(StudentFields),
  },
  {
    display_name: "Specialization",
    name: "specialization",
    values: getStudentListFilterValuesFromRecord(StudentSpecializations),
  },
  {
    display_name: "Degree",
    name: "degree",
    values: getStudentListFilterValuesFromRecord(StudentDegrees),
  },
  {
    display_name: "Semester",
    name: "semester",
    values: getStudentListFilterValuesFromRecord(StudentSemesters),
  },
] satisfies StudentListFilterFields;
