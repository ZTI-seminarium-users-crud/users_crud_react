import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createStudent: StudentResult;
  deleteStudent: StudentResult;
  updateStudent: StudentResult;
};


export type MutationCreateStudentArgs = {
  degree: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  semester: Scalars['String'];
  specialization: Scalars['String'];
};


export type MutationDeleteStudentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateStudentArgs = {
  degree?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: InputMaybe<Scalars['String']>;
  semester?: InputMaybe<Scalars['String']>;
  specialization?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  readStudent: StudentResult;
  readStudents: StudentsResult;
};


export type QueryReadStudentArgs = {
  id: Scalars['ID'];
};


export type QueryReadStudentsArgs = {
  degree?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  semester?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  specialization?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Student = {
  __typename?: 'Student';
  degree: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  semester: Scalars['String'];
  specialization: Scalars['String'];
};

export type StudentResult = {
  __typename?: 'StudentResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  students?: Maybe<Student>;
  success: Scalars['Boolean'];
};

export type StudentsResult = {
  __typename?: 'StudentsResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  page: Scalars['Int'];
  students?: Maybe<Array<Maybe<Student>>>;
  success: Scalars['Boolean'];
  total_count: Scalars['Int'];
};

export type CreateStudentMutationVariables = Exact<{
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  specialization: Scalars['String'];
  degree: Scalars['String'];
  semester: Scalars['String'];
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent: { __typename: 'StudentResult', success: boolean, errors?: Array<string | null> | null, students?: { __typename?: 'Student', id: string, first_name: string, last_name: string, specialization: string, degree: string, semester: string } | null } };

export type UpdateStudentMutationVariables = Exact<{
  id: Scalars['ID'];
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  specialization?: InputMaybe<Scalars['String']>;
  degree?: InputMaybe<Scalars['String']>;
  semester?: InputMaybe<Scalars['String']>;
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent: { __typename: 'StudentResult', success: boolean, errors?: Array<string | null> | null, students?: { __typename?: 'Student', id: string, first_name: string, last_name: string, specialization: string, degree: string, semester: string } | null } };

export type DeleteStudentMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteStudentMutation = { __typename?: 'Mutation', deleteStudent: { __typename: 'StudentResult', success: boolean, errors?: Array<string | null> | null, students?: { __typename?: 'Student', id: string, first_name: string, last_name: string, specialization: string, degree: string, semester: string } | null } };


export const CreateStudentDocument = gql`
    mutation createStudent($first_name: String!, $last_name: String!, $specialization: String!, $degree: String!, $semester: String!) {
  createStudent(
    first_name: $first_name
    last_name: $last_name
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
  }
}
    `;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      specialization: // value for 'specialization'
 *      degree: // value for 'degree'
 *      semester: // value for 'semester'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation updateStudent($id: ID!, $first_name: String, $last_name: String, $specialization: String, $degree: String, $semester: String) {
  updateStudent(
    id: $id
    first_name: $first_name
    last_name: $last_name
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
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      specialization: // value for 'specialization'
 *      degree: // value for 'degree'
 *      semester: // value for 'semester'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const DeleteStudentDocument = gql`
    mutation deleteStudent($id: ID) {
  deleteStudent(id: $id) {
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
  }
}
    `;
export type DeleteStudentMutationFn = Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>;

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStudentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStudentMutation, DeleteStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
      }
export type DeleteStudentMutationHookResult = ReturnType<typeof useDeleteStudentMutation>;
export type DeleteStudentMutationResult = Apollo.MutationResult<DeleteStudentMutation>;
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables>;