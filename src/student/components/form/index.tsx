import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";

import FormCheckbox from "../../../components/form/checkbox";
import NumberInput from "../../../components/form/numberInput";
import SelectField from "../../../components/form/select";
import TextInput from "../../../components/form/textInput";
import routes from "../../../routes";
import { useNavigateAndKeepSearchParams } from "../../../routes/utils.ts";
import { getOptionsFromRecord } from "../../../utils/form.ts";
import { useCreateStudent, useUpdateStudent } from "../../mutation.ts";
import { StudentFormSchema } from "../../schema.ts";
import {
  Student,
  StudentDegree,
  StudentFormData,
  StudentHairColor,
  StudentSemester,
  StudentSpecialization,
} from "../../types.ts";
import { getStudentFormInitialValues } from "../../utils.ts";

type Props = {
  student?: Student;
  id?: string;
  action: "add" | "edit";
};

const StudentForm: React.FC<Props> = ({ student, action, id }) => {
  const { handleCreate } = useCreateStudent();
  const { handleUpdate } = useUpdateStudent();
  const navigate = useNavigateAndKeepSearchParams();

  const methods = useForm({
    defaultValues: ((student && {
      ...student,
      degree: student.degree.toString(),
      semester: student.semester.toString(),
    }) ??
      getStudentFormInitialValues()) as StudentFormData,
    resolver: zodResolver(StudentFormSchema),
  });

  const onSubmit = (data: StudentFormData) => {
    if (action === "add")
      handleCreate(data).then(() => {
        navigate(routes.StudentsList());
      });
    if (action === "edit" && id)
      handleUpdate({ id: +id, ...data }).then(() => {
        navigate(routes.StudentsList());
      });
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <Fields>
          <TextInput name="first_name" label="First name" />
          <TextInput name="last_name" label="Last name" />
          <SelectField
            name="specialization"
            label="Specialization"
            options={getOptionsFromRecord(StudentSpecialization)}
          />
          <SelectField
            name="degree"
            label="Degree"
            options={getOptionsFromRecord(StudentDegree)}
          />
          <SelectField
            name="semester"
            label="Semester"
            options={getOptionsFromRecord(StudentSemester)}
          />
          <NumberInput name="average_grade" label="Average grade" />
          <SelectField
            name="hair_color"
            label="Hair color"
            options={getOptionsFromRecord(StudentHairColor)}
          />
          <NumberInput name="age" label="Age" />
          <NumberInput name="height" label="Height" />
          <NumberInput name="weight" label="Weight" />
          <FormCheckbox name="is_male" label="Male" />
        </Fields>
        <Buttons>
          <Button
            onClick={() => navigate(routes.StudentsList())}
            variant="outlined"
            color="primary"
            type="button"
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            {action.toUpperCase()}
          </Button>
        </Buttons>
      </StyledForm>
    </FormProvider>
  );
};

export default StudentForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1rem; /* adjust this value as needed */

  > div {
    width: 25rem;
    height: 5.5rem;
  }
`;

const Buttons = styled.div`
  width: 100%;
  justify-content: flex-end;
  display: flex;
  gap: 2rem;

  > button {
    width: 7rem;
  }
`;
