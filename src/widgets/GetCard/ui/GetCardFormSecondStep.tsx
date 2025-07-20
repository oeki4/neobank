import type { Application } from "@/entities/application";
import { ApplicationOffer } from "@/widgets/ApplicationOffer";
import { GET_CARD_STEP } from "@/shared/const/storageItems.ts";
import { applyOffer } from "../api/applyOffer.ts";

interface GetCardFormSecondStepProps {
  applications: Application[];
  onSetStep: (payload: number) => void;
}

export const GetCardFormSecondStep = (props: GetCardFormSecondStepProps) => {
  const { applications, onSetStep } = props;

  const onApplyOffer = (application: Application) => {
    applyOffer(application).then((res) => {
      console.log(res);
      onSetStep(3);
      localStorage.setItem(GET_CARD_STEP, "3");
    });
  };
  return (
    <div className="w-full grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-4 mt-12">
      {applications.map((application, index) => (
        <ApplicationOffer onApplyOffer={onApplyOffer} key={index} application={application} />
      ))}
    </div>
  );
};
