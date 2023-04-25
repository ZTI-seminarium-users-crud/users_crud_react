export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
