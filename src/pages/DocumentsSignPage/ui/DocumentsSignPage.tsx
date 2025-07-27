import { type ChangeEvent, useEffect, useState } from "react";
import { DocumentIcon } from "@/shared/ui/Icons/DocumentIcon.tsx";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox.tsx";
import { useNavigate, useParams } from "react-router";
import { signDocuments } from "../api/signDocuments";
import { APPLICATION_STEP, CURRENT_APPLICATION_ID } from "@/shared/const/storageItems.ts";

export const DocumentsSignPage = () => {
  const [documentsSigned, setDocumentsSigned] = useState<boolean>(false);
  const [agreeCheckbox, setAgreeCheckbox] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate("/not-found");

    const savedApplicationId = localStorage.getItem(CURRENT_APPLICATION_ID);
    const applicationStep = localStorage.getItem(APPLICATION_STEP);
    if (savedApplicationId !== id) navigate("/not-found");

    if (!(savedApplicationId && applicationStep && (+applicationStep === 3 || +applicationStep === 4)))
      navigate("/not-found");
  }, [id, navigate]);

  if (!id || isNaN(+id)) {
    navigate("/not-found");
    return;
  }

  const onSignDocuments = () => {
    signDocuments(+id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setDocumentsSigned(true);
        localStorage.setItem(APPLICATION_STEP, "4");
      }
    });
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content pb-24">
      {documentsSigned ? (
        <div className="w-full py-[160px] flex flex-col items-center gap-8">
          <h1 className="font-ubuntu font-bold text-3xl max-w-[500px] text-center">
            Documents have been successfully signed and sent for approval
          </h1>
          <p className="font-ubuntu font-medium text-base max-w-[400px] text-center">
            Within 10 minutes you will be sent a PIN code to your email for confirmation
          </p>
        </div>
      ) : (
        <div className="w-full py-10">
          <div className="flex gap-20 max-sm:flex-col max-sm:items-start max-md:justify-between max-md:gap-4 mb-8 items-center">
            <h2 className="font-ubuntu text-3xl max-sm:text-xl font-bold">Signing of documents</h2>
            <p className="text-base max-sm:text-sm font-medium font-ubuntu whitespace-nowrap text-black">Step 4 of 5</p>
          </div>
          <div>
            <p className="font-ubuntu font-medium xl:text-xl max-sm:text-sm lg:text-base text-[#4F5665]">
              Information on interest rates under bank deposit agreements with individuals. Center for Corporate
              Information Disclosure. Information of a professional participant in the securities market. Information
              about persons under whose control or significant influence the Partner Banks are. By leaving an
              application, you agree to the processing of personal data, obtaining information, obtaining access to a
              credit history, using an analogue of a handwritten signature, an offer, a policy regarding the processing
              of personal data, a form of consent to the processing of personal data.
            </p>
            <div className="mt-8">
              <a
                href="/credit-card-offer.pdf"
                className="flex items-center gap-3 w-min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DocumentIcon />
                <span className="font-ubuntu text-[20px] max-sm:text-base font-medium whitespace-nowrap">
                  Information on your card
                </span>
              </a>
            </div>
            <div className="mt-4 max-sm:mt-10 max-sm:flex-col max-sm:gap-6 flex justify-end gap-20">
              <Checkbox
                onClick={() => setAgreeCheckbox(agreeCheckbox)}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setAgreeCheckbox(event.target.checked)}
                label="I agree"
              />
              <button
                onClick={onSignDocuments}
                disabled={!agreeCheckbox}
                className="bg-[#003CFF] block cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-all font-bold hover:bg-[#7796C0] disabled:bg-[#7796C0] disabled:cursor-auto text-white py-3 px-6 leading-none font-ubuntu rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
