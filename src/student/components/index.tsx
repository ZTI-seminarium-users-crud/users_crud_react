import React from "react";
import styled from "styled-components";

import StudentDialog from "./dialog";
import StudentList from "./list";

type Props = {
  open?: boolean;
};

const StudentPage: React.FC<Props> = ({ open }) => {
  return (
    <>
      {open && <StudentDialog />}
      <StudentPageContainer>
        <StudentList />
      </StudentPageContainer>
    </>
  );
};

export default StudentPage;

const StudentPageContainer = styled.div`
  display: flex;
`;
