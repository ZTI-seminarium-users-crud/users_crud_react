import { UserDegree, UserSemester, UserSpecialization } from "./types";

export const UserSpecializations: Readonly<Record<UserSpecialization, string>> =
  {
    [UserSpecialization.IT]: "Informatyka",
    [UserSpecialization.PHYS]: "Fizyka",
    [UserSpecialization.PHYSMED]: "Fizyka medyczna",
  };

export const UserDegrees: Readonly<Record<UserDegree, string>> = {
  [UserDegree.FIRST]: "1",
  [UserDegree.SECOND]: "2",
};

export const UserSemesters: Readonly<Record<UserSemester, string>> = {
  [UserSemester.FIRST]: "1",
  [UserSemester.SECOND]: "2",
  [UserSemester.THIRD]: "3",
  [UserSemester.FOURTH]: "4",
  [UserSemester.FIFTH]: "5",
  [UserSemester.SIXTH]: "6",
  [UserSemester.SEVENTH]: "7",
};
