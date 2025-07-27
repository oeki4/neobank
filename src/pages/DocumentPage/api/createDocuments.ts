export const createDocuments = async (applicationId: number) => {
  const res = await fetch(`http://localhost:8080/document/${applicationId}`, {
    method: "POST",
    mode: "cors",
  });
  return res;
};
