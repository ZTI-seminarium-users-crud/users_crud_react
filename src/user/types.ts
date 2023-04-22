import { z } from "zod";

import { UserSchema } from "./schema";

export enum UserSpecialization {
  IT = "INFORMATYKA",
  PHYS = "FIZYKA",
  PHYSMED = "FIZMED",
}

export enum UserDegree {
  FIRST = "1",
  SECOND = "2",
}

export enum UserSemester {
  FIRST = "1",
  SECOND = "2",
  THIRD = "3",
  FOURTH = "4",
  FIFTH = "5",
  SIXTH = "6",
  SEVENTH = "7",
}

export type User = z.infer<typeof UserSchema>;
