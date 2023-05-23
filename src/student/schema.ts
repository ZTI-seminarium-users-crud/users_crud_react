import { z } from "zod";

import { StudentDegree, StudentSemester, StudentSpecialization } from "./types";

export const StudentSchema = z.object({
  id: z.number(),
  first_name: z.string().min(1, "Required"),
  last_name: z.string().min(1, "Required"),
  specialization: z.nativeEnum(StudentSpecialization),
  degree: z.nativeEnum(StudentDegree),
  semester: z.nativeEnum(StudentSemester),
  is_male: z.boolean(),
  average_grade: z.number().min(2).max(5),
  hair_color: z.string().min(0, "Required"),
  height: z.number().min(1).max(250),
  weight: z.number().min(1).max(400),
  age: z.number().min(1).max(100),
});

export const StudentFormSchema = StudentSchema.omit({ id: true });
