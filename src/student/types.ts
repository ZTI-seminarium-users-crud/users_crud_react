import { z } from "zod";

import { StudentFormSchema, StudentSchema } from "./schema.ts";

export type Student = z.infer<typeof StudentSchema>;

export type StudentFormData = z.infer<typeof StudentFormSchema>;

export interface StudentResult {
  success: boolean;
  errors: string[];
  student: Student;
}

export interface StudentsResult {
  success: boolean;
  errors: string[];
  students: Student[];
  total_count: number;
  page: number;
}

export enum StudentSpecialization {
  CS = "Computer Science",
  CHEM = "Chemistry",
  PSYCH = "Psychology",
  PS = "Political Science",
  HIS = "History",
}

export enum StudentDegree {
  FIRST = "1",
  SECOND = "2",
  THIRD = "3",
}

export enum StudentSemester {
  FIRST = "1",
  SECOND = "2",
  THIRD = "3",
  FOURTH = "4",
  FIFTH = "5",
  SIXTH = "6",
  SEVENTH = "7",
}

export enum StudentHairColor {
  BLACK = "Black",
  BROWN = "Brown",
  BLOND = "Blond",
  RED = "Red",
  GREY = "Grey",
  WHITE = "White",
}

export enum StudentField {
  FIRST_NAME = "first_name",
  LAST_NAME = "last_name",
  SPECIALIZATION = "specialization",
  DEGREE = "degree",
  SEMESTER = "semester",
  IS_MALE = "is_male",
  AVERAGE_GRADE = "average_grade",
  HAIR_COLOR = "hair_color",
  HEIGHT = "height",
  WEIGHT = "weight",
  AGE = "age",
}
