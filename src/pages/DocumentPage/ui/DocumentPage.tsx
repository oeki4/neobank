import { Table } from "@/shared/ui/Table/Table.tsx";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState, type ChangeEvent } from "react";
import type { FullApplication } from "@/entities/application";
import { getSchedule } from "@/pages/DocumentPage/api/getSchedule.ts";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox.tsx";
import { Loader } from "@/shared/ui/Loader/Loader.tsx";
import { SuccessDenyModal } from "@/widgets/SuccessDenyModal";
import { ConfirmDenyModal } from "@/widgets/ConfirmDenyModal";
import { createDocuments } from "../api/createDocuments.ts";
import { denyApplication } from "../api/denyApplication.ts";
import {
  APPLICATION_ITEMS,
  APPLICATION_STEP,
  CURRENT_APPLICATION_ID,
  GET_CARD_STEP,
} from "@/shared/const/storageItems.ts";

export const DocumentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inLoading, setInLoading] = useState<boolean>(false);
  const [application, setApplication] = useState<FullApplication | null>(null);
  const [agreeCheckbox, setAgreeCheckbox] = useState<boolean>(false);
  const [confirmDenyModal, setConfirmDenyModal] = useState(false);
  const [successDenyModal, setSuccessDenyModal] = useState(false);
  const [documentsSent, setDocumentsSent] = useState(false);
  useEffect(() => {
    if (id && !isNaN(+id)) {
      getSchedule(+id).then((res) => {
        setApplication(res);
      });
    } else {
      navigate("/not-found");
    }
  }, [id, navigate]);
  useEffect(() => {
    if (!id) navigate("/not-found");

    const savedApplicationId = localStorage.getItem(CURRENT_APPLICATION_ID);
    const applicationStep = localStorage.getItem(APPLICATION_STEP);
    if (savedApplicationId !== id) navigate("/not-found");

    if (!(savedApplicationId && applicationStep && (+applicationStep === 2 || +applicationStep === 3)))
      navigate("/not-found");
  }, [id, navigate]);

  const denyDocument = () => {
    if (id) {
      denyApplication(+id).then((res) => {
        if (res.status === 200) {
          setConfirmDenyModal(false);
          setSuccessDenyModal(true);
          localStorage.removeItem(GET_CARD_STEP);
          localStorage.removeItem(CURRENT_APPLICATION_ID);
          localStorage.removeItem(APPLICATION_ITEMS);
          localStorage.removeItem(APPLICATION_STEP);
        }
      });
    }
  };
  const sendDocument = () => {
    setInLoading(true);
    if (id) {
      createDocuments(+id).then((res) => {
        console.log(res);
        setTimeout(() => {
          setInLoading(false);
          if (res.status === 200) {
            setDocumentsSent(true);
            localStorage.setItem(APPLICATION_STEP, "3");
          }
        }, 2000);
      });
    }
  };
  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content pb-24">
      {documentsSent ? (
        <div className="w-full py-[160px] flex flex-col items-center gap-8">
          <h1 className="font-ubuntu font-bold text-3xl">Documents are formed</h1>
          <p className="font-ubuntu font-medium text-base">Documents for signing will be sent to your email</p>
        </div>
      ) : (
        <div className="shadow-[0_2px_4px_rgba(0,0,0,0.2)] relative w-full p-8 rounded-[28px] max-sm:p-6">
          <div
            className={[
              "w-full h-full bg-[#D9D9D964] transition-all absolute top-0 left-0 z-10 rounded-[28px] flex justify-center items-center",
              inLoading ? "block" : "hidden",
            ].join(" ")}
          >
            <Loader />
          </div>
          <div className="flex gap-20 max-sm:flex-col max-sm:items-start max-md:justify-between max-md:gap-4 max-sm:mb-8 mb-[76px] items-center">
            <h2 className="font-ubuntu text-3xl max-sm:text-xl font-bold">Payment Schedule</h2>
            <p className="text-base max-sm:text-sm font-medium font-ubuntu whitespace-nowrap text-black">Step 3 of 5</p>
          </div>
          {application ? (
            <div className="overflow-x-auto">
              <Table
                head={[
                  { label: "number", key: "number", type: "number" },
                  { label: "date", key: "date", type: "date" },
                  { label: "total payment", key: "totalPayment", type: "number" },
                  { label: "interest payment", key: "interestPayment", type: "number" },
                  { label: "debt payment", key: "debtPayment", type: "number" },
                  { label: "remaining debt", key: "remainingDebt", type: "number" },
                ]}
                body={application?.credit?.paymentSchedule || []}
              />
            </div>
          ) : null}
          <div className="flex max-sm:flex-col-reverse max-sm:gap-y-8 gap-6 justify-between mt-12">
            <button
              onClick={() => setConfirmDenyModal(true)}
              className="bg-[#D93737CC] block cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-all font-bold hover:opacity-50 disabled:opacity-50 text-white py-3 px-6 leading-none font-ubuntu rounded-lg"
            >
              Deny
            </button>
            <div className="flex gap-10 max-sm:flex-col max-sm:gap-4">
              <Checkbox
                onClick={() => setAgreeCheckbox(agreeCheckbox)}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setAgreeCheckbox(event.target.checked)}
                label="I agree with the payment schedule"
              />
              <button
                onClick={sendDocument}
                disabled={!agreeCheckbox}
                className="bg-[#003CFF] block cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-all font-bold hover:bg-[#7796C0] disabled:bg-[#7796C0] disabled:cursor-auto text-white py-3 px-6 leading-none font-ubuntu rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDenyModal isOpen={confirmDenyModal} setIsOpen={setConfirmDenyModal} denyDocument={denyDocument} />
      <SuccessDenyModal isOpen={successDenyModal} setIsOpen={setSuccessDenyModal} />
    </div>
  );
};
