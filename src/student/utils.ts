import {
  StudentDegree,
  StudentFormData,
  StudentHairColor,
  StudentSemester,
  StudentSpecialization,
} from "./types.ts";

export const getStudentFormInitialValues = () =>
  ({
    first_name: "",
    last_name: "",
    degree: StudentDegree.FIRST,
    specialization: StudentSpecialization.CS,
    semester: StudentSemester.FIRST,
    weight: 0,
    height: 0,
    hair_color: StudentHairColor.BLACK,
    is_male: true,
    age: 0,
    average_grade: 4,
  } satisfies StudentFormData);
