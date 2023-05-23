import { gql, useQuery } from "@apollo/client";

import {
  StudentDegree,
  StudentResult,
  StudentSemester,
  StudentSpecialization,
  StudentsResult,
} from "./types.ts";

export type ReadStudentsQueryVariables = {
  limit: number;
  offset: number;
  specialization: StudentSpecialization[] | undefined;
  degree: StudentDegree[] | undefined;
  semester: StudentSemester[] | undefined;
};

const READ_STUDENT = `query readStudent($id: ID!) {
    readStudent (
        id: $id
    ) {
        success
        errors
        student {
            id
            first_name
            last_name
            specialization
            degree
            semester
            is_male
            average_grade
            hair_color
            height
            weight
            age
        }
    }
}`;

export const useReadStudentQuery = (id: number) => {
  return useQuery<{ readStudent: StudentResult }>(gql(READ_STUDENT), {
    variables: {
      id,
    },
  });
};

function buildQueryString(selectedFields: string[]) {
  return `query readStudents($limit: Int, $offset: Int, $specialization: [String], $degree: [String], $semester: [String]) {
    readStudents (
        limit: $limit,
        offset: $offset,
        specialization: $specialization,
        degree: $degree,
        semester: $semester
    ) {
        success
        errors
        students {
          id,
          ${selectedFields.join(" ")}
        }
        total_count
        page
      }
    }`;
}

export const useReadStudentsQuery = (
  variables: ReadStudentsQueryVariables,
  selectedFields: string[] = []
) => {
  const GET_STUDENTS = gql(buildQueryString(selectedFields));
  return useQuery<{ readStudents: StudentsResult }>(GET_STUDENTS, {
    variables,
  });
};
