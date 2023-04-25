import React from "react";

import Drawer from "components/drawer";

import StudentListFilters from "./filters";
import StudentListTable from "./table";

const StudentList: React.FC = () => {
  return (
    <>
      <Drawer>
        <StudentListFilters />
      </Drawer>
      <StudentListTable />
    </>
  );
};

export default StudentList;
