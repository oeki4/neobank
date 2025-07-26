import { Table } from "@/shared/ui/Table/Table.tsx";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { FullApplication } from "@/entities/application";
import { getSchedule } from "@/pages/DocumentPage/api/getSchedule.ts";

export const DocumentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState<FullApplication | null>(null);
  useEffect(() => {
    if (id && !isNaN(+id)) {
      getSchedule(+id).then((res) => {
        setApplication(res);
      });
    } else {
      navigate("/not-found");
    }
  }, [id, navigate]);
  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content pb-24">
      <div className="shadow-[0_2px_4px_rgba(0,0,0,0.2)] w-full p-8 rounded-[28px]">
        <div className="flex gap-20 max-md:justify-between max-md:gap-4 mb-[76px] items-center">
          <h2 className="font-ubuntu text-3xl font-bold">Payment Schedule</h2>
          <p className="text-base font-medium font-ubuntu whitespace-nowrap text-black">Step 3 of 5</p>
        </div>
        {application ? (
          <Table
            head={[
              { label: "number", key: "number", type: "number" },
              { label: "date", key: "date", type: "date" },
              { label: "total payment", key: "totalPayment", type: "number" },
              { label: "interest payment", key: "interestPayment", type: "number" },
              { label: "debt payment", key: "debtPayment", type: "number" },
              { label: "remaining debt", key: "remainingDebt", type: "number" },
            ]}
            body={application.credit.paymentSchedule}
          />
        ) : null}

        <div className="flex justify-between mt-12">
          <button className="bg-[#D93737CC] block cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-all font-bold hover:opacity-50 disabled:opacity-50 text-white py-3 px-6 leading-none font-ubuntu rounded-lg">
            Deny
          </button>
          <div>
            <button className="bg-[#003CFF] block cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-all font-bold hover:bg-[#7796C0] disabled:bg-[#7796C0] text-white py-3 px-6 leading-none font-ubuntu rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
