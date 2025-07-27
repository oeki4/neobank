export const checkCode = async (applicationId: number, code: string) => {
  const res = await fetch(`http://localhost:8080/document/${applicationId}/sign/code`, {
    method: "POST",
    mode: "cors",
    body: code,
    headers: {
      "Content-type": "application/json",
    },
  });
  return res;
};
