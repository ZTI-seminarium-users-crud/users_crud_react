import React from "react";

import { useReadStudentQuery } from "../../query.ts";

import StudentForm from "./index.tsx";

type Props = {
  id: string;
};

const StudentEditForm: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useReadStudentQuery(+id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No data</p>;

  return (
    <StudentForm student={data.readStudent.student} action="edit" id={id} />
  );
};

export default StudentEditForm;
