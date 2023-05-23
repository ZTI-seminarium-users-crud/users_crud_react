import { useMutation, gql } from "@apollo/client";

import { Student, StudentFormData } from "./types.ts";

const CREATE_STUDENT = `
  mutation ($first_name: String!, $last_name: String!, $specialization: String!, $degree: String!, $semester: String!, $is_male: Boolean!, $average_grade: Float, $hair_color: String, $height: Float, $weight: Float, $age: Int) {
    createStudent (
        first_name: $first_name,
        last_name: $last_name,
        specialization: $specialization,
        degree: $degree,
        semester: $semester,
        is_male: $is_male,
        average_grade: $average_grade,
        hair_color: $hair_color,
        height: $height,
        weight: $weight,
        age: $age
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
  }
`;

export function useCreateStudent() {
  const [createStudent, { loading, error }] = useMutation(gql(CREATE_STUDENT), {
    refetchQueries: ["readStudents"],
  });

  const handleCreate = (data: StudentFormData) => {
    return createStudent({ variables: data });
  };

  return {
    handleCreate,
    loading,
    error,
  };
}

const UPDATE_STUDENT = `
  mutation ($id: ID!, $first_name: String, $last_name: String, $specialization: String, $degree: String, $semester: String, $average_grade: Float, $hair_color: String, $height: Float, $weight: Float, $age: Int, $is_male: Boolean!) {
    updateStudent (
        id: $id,
        first_name: $first_name,
        last_name: $last_name,
        specialization: $specialization,
        degree: $degree,
        semester: $semester,
        average_grade: $average_grade,
        hair_color: $hair_color,
        height: $height,
        weight: $weight,
        age: $age,
        is_male: $is_male
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
  }
`;

export function useUpdateStudent() {
  const [updateStudent, { loading, error }] = useMutation(gql(UPDATE_STUDENT), {
    refetchQueries: ["readStudents"],
  });

  const handleUpdate = (data: Student) => {
    console.log({ variables: data });
    return updateStudent({ variables: data });
  };

  return {
    handleUpdate,
    loading,
    error,
  };
}

const DELETE_STUDENT = `
  mutation ($id: ID!) {
    deleteStudent(id: $id) {
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
  }
`;

export function useDeleteStudent() {
  const [deleteStudent, { loading, error }] = useMutation(gql(DELETE_STUDENT), {
    refetchQueries: ["readStudents"],
  });

  const handleDelete = (id: string) => {
    return deleteStudent({ variables: { id } });
  };

  return {
    handleDelete,
    loading,
    error,
  };
}
