import { StudentDegree, StudentSemester, StudentSpecialization } from "./types";

export const StudentSpecializations: Readonly<
  Record<StudentSpecialization, string>
> = {
  [StudentSpecialization.IT]: "Informatyka",
  [StudentSpecialization.PHYS]: "Fizyka",
  [StudentSpecialization.PHYSMED]: "Fizyka medyczna",
};

export const StudentDegrees: Readonly<Record<StudentDegree, string>> = {
  [StudentDegree.FIRST]: "1",
  [StudentDegree.SECOND]: "2",
};

export const StudentSemesters: Readonly<Record<StudentSemester, string>> = {
  [StudentSemester.FIRST]: "1",
  [StudentSemester.SECOND]: "2",
  [StudentSemester.THIRD]: "3",
  [StudentSemester.FOURTH]: "4",
  [StudentSemester.FIFTH]: "5",
  [StudentSemester.SIXTH]: "6",
  [StudentSemester.SEVENTH]: "7",
};
