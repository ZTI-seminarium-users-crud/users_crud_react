import {
  StudentDegree,
  StudentField,
  StudentSemester,
  StudentSpecialization,
} from "./types";

export const StudentSpecializations = {
  [StudentSpecialization.CS]: "Computer Science",
  [StudentSpecialization.CHEM]: "Chemistry",
  [StudentSpecialization.PSYCH]: "Psychology",
  [StudentSpecialization.PS]: "Political Science",
  [StudentSpecialization.HIS]: "History",
} satisfies Readonly<Record<StudentSpecialization, string>>;

export const StudentDegrees = {
  [StudentDegree.FIRST]: 1,
  [StudentDegree.SECOND]: 2,
  [StudentDegree.THIRD]: 3,
} satisfies Readonly<Record<StudentDegree, string | number>>;

export const StudentSemesters = {
  [StudentSemester.FIRST]: 1,
  [StudentSemester.SECOND]: 2,
  [StudentSemester.THIRD]: 3,
  [StudentSemester.FOURTH]: 4,
  [StudentSemester.FIFTH]: 5,
  [StudentSemester.SIXTH]: 6,
  [StudentSemester.SEVENTH]: 7,
} satisfies Readonly<Record<StudentSemester, string | number>>;

export const StudentFields = {
  [StudentField.FIRST_NAME]: "First name",
  [StudentField.LAST_NAME]: "Last name",
  [StudentField.SPECIALIZATION]: "Specialization",
  [StudentField.DEGREE]: "Degree",
  [StudentField.SEMESTER]: "Semester",
  [StudentField.IS_MALE]: "Male",
  [StudentField.AVERAGE_GRADE]: "Average grade",
  [StudentField.HAIR_COLOR]: "Hair color",
  [StudentField.HEIGHT]: "Height",
  [StudentField.WEIGHT]: "Weight",
  [StudentField.AGE]: "Age",
} satisfies Readonly<Record<StudentField, string>>;
