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

export type ReadStudentsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  specialization?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  degree?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  semester?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ReadStudentsQuery = { __typename?: 'Query', readStudents: { __typename: 'StudentsResult', success: boolean, errors?: Array<string | null> | null, total_count: number, page: number, students?: Array<{ __typename?: 'Student', id: string, first_name: string, last_name: string, specialization: string, degree: string, semester: string } | null> | null } };

export type ReadStudentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReadStudentQuery = { __typename?: 'Query', readStudent: { __typename: 'StudentResult', success: boolean, errors?: Array<string | null> | null, students?: { __typename?: 'Student', id: string, first_name: string, last_name: string, specialization: string, degree: string, semester: string } | null } };


export const ReadStudentsDocument = gql`
    query readStudents($limit: Int, $offset: Int, $specialization: [String], $degree: [String], $semester: [String]) {
  readStudents(
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

/**
 * __useReadStudentsQuery__
 *
 * To run a query within a React component, call `useReadStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadStudentsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      specialization: // value for 'specialization'
 *      degree: // value for 'degree'
 *      semester: // value for 'semester'
 *   },
 * });
 */
export function useReadStudentsQuery(baseOptions?: Apollo.QueryHookOptions<ReadStudentsQuery, ReadStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReadStudentsQuery, ReadStudentsQueryVariables>(ReadStudentsDocument, options);
      }
export function useReadStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadStudentsQuery, ReadStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReadStudentsQuery, ReadStudentsQueryVariables>(ReadStudentsDocument, options);
        }
export type ReadStudentsQueryHookResult = ReturnType<typeof useReadStudentsQuery>;
export type ReadStudentsLazyQueryHookResult = ReturnType<typeof useReadStudentsLazyQuery>;
export type ReadStudentsQueryResult = Apollo.QueryResult<ReadStudentsQuery, ReadStudentsQueryVariables>;
export const ReadStudentDocument = gql`
    query readStudent($id: ID!) {
  readStudent(id: $id) {
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

/**
 * __useReadStudentQuery__
 *
 * To run a query within a React component, call `useReadStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadStudentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReadStudentQuery(baseOptions: Apollo.QueryHookOptions<ReadStudentQuery, ReadStudentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReadStudentQuery, ReadStudentQueryVariables>(ReadStudentDocument, options);
      }
export function useReadStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadStudentQuery, ReadStudentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReadStudentQuery, ReadStudentQueryVariables>(ReadStudentDocument, options);
        }
export type ReadStudentQueryHookResult = ReturnType<typeof useReadStudentQuery>;
export type ReadStudentLazyQueryHookResult = ReturnType<typeof useReadStudentLazyQuery>;
export type ReadStudentQueryResult = Apollo.QueryResult<ReadStudentQuery, ReadStudentQueryVariables>;