export const signDocuments = async (applicationId: number) => {
  const res = await fetch(`http://localhost:8080/document/${applicationId}/sign`, {
    method: "POST",
    mode: "cors",
  });
  return res;
};
