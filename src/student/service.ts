import { useDeleteStudentMutation } from "./graphql/mutation";

export const useDeleteStudentService = () => {
  const [deleteStudent, ...rest] = useDeleteStudentMutation();

  const handleDelete = (id: string) =>
    deleteStudent({
      variables: { id },
      refetchQueries: ["readStudents"],
      onQueryUpdated(observableQuery) {
        observableQuery.refetch();
      },
    });

  return { handleDelete, ...rest };
};
