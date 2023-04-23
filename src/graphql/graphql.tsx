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
  getStudents: StudentResult;
  listStudents: StudentsResult;
};


export type QueryGetStudentsArgs = {
  id: Scalars['ID'];
};


export type QueryListStudentsArgs = {
  degree?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  semester?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  specialization?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StudentResult = {
  __typename?: 'StudentResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  students?: Maybe<Students>;
  success: Scalars['Boolean'];
};

export type Students = {
  __typename?: 'Students';
  degree: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  semester: Scalars['String'];
  specialization: Scalars['String'];
};

export type StudentsResult = {
  __typename?: 'StudentsResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  page: Scalars['Int'];
  students?: Maybe<Array<Maybe<Students>>>;
  success: Scalars['Boolean'];
  total_count: Scalars['Int'];
};

export type ListStudentsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  specialization?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  degree?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  semester?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ListStudentsQuery = { __typename?: 'Query', listStudents: { __typename: 'StudentsResult', success: boolean, errors?: Array<string | null> | null, total_count: number, page: number, students?: Array<{ __typename?: 'Students', id: string, first_name: string, last_name: string, specialization: string, degree: string, semester: string } | null> | null } };


export const ListStudentsDocument = gql`
    query listStudents($limit: Int!, $offset: Int!, $specialization: [String], $degree: [String], $semester: [String]) {
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

/**
 * __useListStudentsQuery__
 *
 * To run a query within a React component, call `useListStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStudentsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      specialization: // value for 'specialization'
 *      degree: // value for 'degree'
 *      semester: // value for 'semester'
 *   },
 * });
 */
export function useListStudentsQuery(baseOptions: Apollo.QueryHookOptions<ListStudentsQuery, ListStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListStudentsQuery, ListStudentsQueryVariables>(ListStudentsDocument, options);
      }
export function useListStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStudentsQuery, ListStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListStudentsQuery, ListStudentsQueryVariables>(ListStudentsDocument, options);
        }
export type ListStudentsQueryHookResult = ReturnType<typeof useListStudentsQuery>;
export type ListStudentsLazyQueryHookResult = ReturnType<typeof useListStudentsLazyQuery>;
export type ListStudentsQueryResult = Apollo.QueryResult<ListStudentsQuery, ListStudentsQueryVariables>;