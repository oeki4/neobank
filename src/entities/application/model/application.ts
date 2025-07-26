import type { EmploymentStatus, Gender, MaritalStatus, Position } from "@/shared/types/SelectTypes.ts";

export interface Application {
  applicationId: number;
  requestedAmount: number;
  totalAmount: number;
  term: number;
  monthlyPayment: number;
  rate: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
}

type ApplicationStatus =
  | "PREAPPROVAL"
  | "APPROVED"
  | "CC_DENIED"
  | "CC_APPROVED"
  | "PREPARE_DOCUMENTS"
  | "DOCUMENT_CREATED";
type ChangeType = "MANUAL" | "AUTOMATIC";

export interface FullApplication {
  id: number;
  client: {
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    gender: Gender;
    birthdate: string;
    passportSeries: string;
    passportNumber: string;
    passportIssueDate: string;
    passportIssueBranch: string;
    maritalStatus: MaritalStatus;
    dependentAmount: number;
    employment: {
      employmentStatus: EmploymentStatus;
      employerINN: string;
      salary: number;
      position: Position;
      workExperienceTotal: number;
      workExperienceCurrent: number;
    };
    account: string;
  };
  credit: {
    amount: number;
    term: number;
    monthlyPayment: number;
    rate: number;
    psk: number;
    isInsuranceEnabled: boolean;
    isSalaryClient: boolean;
    paymentSchedule: Array<{
      number: 0;
      date: string;
      totalPayment: number;
      interestPayment: number;
      debtPayment: number;
      remainingDebt: number;
    }>;
  };
  status: ApplicationStatus;
  creationDate: Date;
  signDate: null;
  sesCode: string;
  statusHistory: Array<{
    status: ApplicationStatus;
    time: Date;
    changeType: ChangeType;
  }>;
}
