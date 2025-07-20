import type { Application } from "@/entities/application";
import { numberWithSpaces } from "@/shared/utils/numberWithSpaces.ts";
import { InputErrorIcon } from "@/shared/ui/Icons/InputErrorIcon.tsx";
import { SuccessInputIcon } from "@/shared/ui/Icons/SuccessInputIcon.tsx";

interface ApplicationOfferProps {
  application: Application;
  onApplyOffer: (payload: Application) => void;
}

export const ApplicationOffer = (props: ApplicationOfferProps) => {
  const { application, onApplyOffer } = props;
  const onApplyOfferWrapper = () => {
    onApplyOffer(application);
  };
  return (
    <div className="w-full rounded-[28px] gap-8 max-lg:gap-4 flex flex-col shadow-[0px_2px_4px_rgba(0,0,0,0.2),_0px_0px_8px_rgba(0,0,0,0.08)] items-center bg-white p-8 max-lg:p-6">
      <img src="/box.webp" className="max-w-[150px] h-auto" alt="box" />
      <div className="flex flex-col gap-3.5">
        <p className="font-ubuntu text-center font-medium text-base">
          Requested amount: {numberWithSpaces(application.requestedAmount)} &#8381;
        </p>
        <p className="font-ubuntu text-center font-medium text-base">
          Total amount: {numberWithSpaces(application.totalAmount)} &#8381;
        </p>
        <p className="font-ubuntu text-center font-medium text-base">For {application.term} months</p>
        <p className="font-ubuntu text-center font-medium text-base">
          Monthly payment: {numberWithSpaces(application.monthlyPayment)} &#8381;
        </p>
        <p className="font-ubuntu text-center font-medium text-base">Your rate: {application.rate}</p>
        <div className=" flex gap-2 justify-center">
          <p className="font-ubuntu text-center font-medium text-base">Insurance included</p>
          {application.isInsuranceEnabled ? (
            <SuccessInputIcon className="size-6" />
          ) : (
            <InputErrorIcon className="size-6" />
          )}
        </div>
        <div className=" flex gap-2 justify-center">
          <p className="font-ubuntu text-center font-medium text-base">Salary client</p>
          {application.isSalaryClient ? <SuccessInputIcon className="size-6" /> : <InputErrorIcon className="size-6" />}
        </div>
      </div>
      <div className="flex w-full px-[42px]">
        <button
          onClick={onApplyOfferWrapper}
          className="bg-[#003CFF] w-full block mt-[58px] cursor-pointer text-center whitespace-nowrap text-sm sm:text-base transition-colors font-bold hover:bg-[#7796C0] text-white py-4 leading-none font-ubuntu rounded-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};
