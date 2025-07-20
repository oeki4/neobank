import type { Application } from "@/entities/application";

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
  const res = await fetch("http://localhost:8080/application", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    mode: "cors",
  });
  const application = (await res.json()) as Application[];
  return application;
};
