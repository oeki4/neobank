interface ApplicationResponse {
  applicationId: number;
  requestedAmount: number;
  totalAmount: number;
  term: number;
  monthlyPayment: number;
  rate: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
}

interface CreateApplicationBody {
  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  birthdate: string;
  passportSeries: string;
  passportNumber: string;
}

export const createApplication = async (body: CreateApplicationBody) => {
  const res = await fetch("http://localhost:8080/appliation", {
    method: "POST",
    body: JSON.stringify(body),
    mode: "no-cors",
  });
  const application = (await res.json()) as ApplicationResponse;
  return application;
};
