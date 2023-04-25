import styled from "styled-components";

import StudentList from "./list";

const StudentPage = () => {
  return (
    <StudentPageContainer>
      <StudentList />
    </StudentPageContainer>
  );
};

export default StudentPage;

const StudentPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;
