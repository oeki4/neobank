import { GetCardFormFirstStep } from "@/widgets/GetCard/ui/GetCardFormFirstStep.tsx";
import { GetCardFormSecondStep } from "@/widgets/GetCard/ui/GetCardFormSecondStep.tsx";
import { GetCardFormThirdStep } from "@/widgets/GetCard/ui/GetCardFormThirdStep.tsx";
import { useState } from "react";
import { APPLICATION_ITEMS, GET_CARD_STEP } from "@/shared/const/storageItems.ts";
import type { Application } from "@/entities/application";

export const GetCard = () => {
  const [step, setStep] = useState<number>(Number(localStorage.getItem(GET_CARD_STEP)) || 1);
  const [applications, setApplications] = useState<Application[]>(() => {
    const item = localStorage.getItem(APPLICATION_ITEMS);
    return item ? (JSON.parse(item) as Application[]) : [];
  });
  return (
    <>
      {step === 1 ? <GetCardFormFirstStep onSetApplications={setApplications} onSetStep={setStep} /> : null}
      {step === 2 ? <GetCardFormSecondStep onSetStep={setStep} applications={applications} /> : null}
      {step === 3 ? <GetCardFormThirdStep /> : null}
    </>
  );
};
