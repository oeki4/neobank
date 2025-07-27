export const denyApplication = async (applicationId: number) => {
  const res = await fetch(`http://localhost:8080/application/${applicationId}/deny`, {
    method: "POST",
    mode: "cors",
  });
  return res;
};
