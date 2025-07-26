import type { FullApplication } from "@/entities/application";

export const getSchedule = async (applicationId: number) => {
  const res = await fetch(`http://localhost:8080/admin/application/${applicationId}`, {
    method: "GET",
    mode: "cors",
  });
  const application = (await res.json()) as FullApplication;
  return application;
};
