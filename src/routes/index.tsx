import { RouteObject } from "react-router/dist/lib/context";
import { Navigate } from "react-router-dom";

import StudentPage from "student/components";

const Routes = {
  StudentsList: () => `/students`,
  StudentAdd: () => `${Routes.StudentsList()}/add`,
  StudentEdit: (id: string) => `${Routes.StudentsList()}/${id}`,
};

export default Routes;

export const routeObjects = [
  {
    path: "/",
    element: <Navigate to="/students" replace={true} />,
  },
  {
    path: "students",
    children: [
      {
        path: "",
        element: <StudentPage />,
      },
      {
        path: "add",
        element: <StudentPage open />,
      },
      {
        path: ":id",
        element: <StudentPage open />,
      },
    ],
  },
] satisfies RouteObject[];
