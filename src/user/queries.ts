import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query listStudents(
    $limit: Int!
    $offset: Int!
    $specialization: [String]
    $degree: [String]
    $semester: [String]
  ) {
    listStudents(
      limit: $limit
      offset: $offset
      specialization: $specialization
      degree: $degree
      semester: $semester
    ) {
      __typename
      success
      errors
      students {
        id
        first_name
        last_name
        specialization
        degree
        semester
      }
      total_count
      page
    }
  }
`;
