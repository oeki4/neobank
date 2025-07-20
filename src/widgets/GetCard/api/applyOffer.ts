interface ApplyOfferBody {
  applicationId: number;
  requestedAmount: number;
  totalAmount: number;
  term: number;
  monthlyPayment: number;
  rate: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
}

export const applyOffer = async (body: ApplyOfferBody) => {
  const res = await fetch("http://localhost:8080/application/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    mode: "cors",
  });
  return res;
};
