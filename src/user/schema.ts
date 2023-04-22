import { z } from "zod";

import { UserDegree, UserSemester, UserSpecialization } from "./types";

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  specialization: z.nativeEnum(UserSpecialization),
  degree: z.nativeEnum(UserDegree),
  semester: z.nativeEnum(UserSemester),
});
