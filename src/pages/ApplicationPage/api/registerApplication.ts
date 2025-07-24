import type { EmploymentStatus, Gender, MaritalStatus, Position } from "@/shared/types/SelectTypes.ts";

interface RegisterApplicationBody {
  applicationId: number;
  gender: Gender;
  maritalStatus: MaritalStatus;
  dependentAmount: number;
  passportIssueDate: string;
  passportIssueBranch: string;
  employmentStatus: EmploymentStatus;
  employerINN: string;
  salary: number;
  position: Position;
  workExperienceTotal: number;
  workExperienceCurrent: number;
}

export const registerApplication = async (body: RegisterApplicationBody) => {
  const res = await fetch(`http://localhost:8080/application/registration/${body.applicationId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gender: body.gender,
      maritalStatus: body.maritalStatus,
      dependentAmount: +body.dependentAmount,
      passportIssueDate: body.passportIssueDate,
      passportIssueBranch: body.passportIssueBranch,
      employment: {
        employmentStatus: body.employmentStatus,
        employerINN: +body.employerINN,
        salary: +body.salary,
        position: body.position,
        workExperienceTotal: +body.workExperienceTotal,
        workExperienceCurrent: +body.workExperienceCurrent,
      },
      account: `${body.employerINN}1234`,
    }),
    mode: "cors",
  });
  return res;
};
