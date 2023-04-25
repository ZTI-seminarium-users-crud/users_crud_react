import { z } from "zod";

import { StudentDegree, StudentSemester, StudentSpecialization } from "./types";

export const StudentSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  specialization: z.nativeEnum(StudentSpecialization),
  degree: z.nativeEnum(StudentDegree),
  semester: z.nativeEnum(StudentSemester),
});
