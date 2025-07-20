import { PhotoIcon } from "@/shared/ui/Icons/PhotoIcon.tsx";
import { CalendarIcon } from "@/shared/ui/Icons/CalendarIcon.tsx";
import { ClockIcon } from "@/shared/ui/Icons/ClockIcon.tsx";
import { CartIcon } from "@/shared/ui/Icons/CartIcon.tsx";
import { CardIcon } from "@/shared/ui/Icons/CardIcon.tsx";

export const AboutCard = () => {
  return (
    <div className="flex w-full flex-wrap gap-10">
      <div className="p-5 sm:p-8 bg-[#EAECEE] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px] sm:min-w-[405px] grow-1">
        <PhotoIcon className="w-10 h-10" />
        <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">Up to 50 000 ₽</h2>
        <p className="mt-4 text-sm sm:text-base w-full md:max-w-[335px] font-ubuntu font-medium text-black">
          Cash and transfers without commission and percent
        </p>
      </div>
      <div className="p-5 sm:p-8 bg-[#7F92ACB2] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px] sm:min-w-[405px] grow-1">
        <CalendarIcon className="w-10 h-10" />
        <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">Up to 160 days</h2>
        <p className="mt-4 text-sm sm:text-base md:max-w-[335px] w-full font-ubuntu font-medium text-black">
          Without percent on the loan
        </p>
      </div>
      <div className="p-5 sm:p-8 bg-[#EAECEE] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px] sm:min-w-[405px] grow-1">
        <ClockIcon className="w-10 h-10" />
        <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">Free delivery</h2>
        <p className="mt-4 text-sm sm:text-base md:max-w-[335px] w-full font-ubuntu font-medium text-black">
          We will deliver your card by courier at a convenient place and time for you
        </p>
      </div>
      <div className="p-5 sm:p-8 bg-[#7F92ACB2] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px] sm:min-w-[405px] grow-1">
        <CartIcon className="w-10 h-10" />
        <h2 className="mt-4 sm:mt-6 font-ubuntu md:max-w-[550px] w-full font-bold text-black text-2xl sm:text-3xl">
          Up to 12 months
        </h2>
        <p className="mt-4 text-sm sm:text-base  md:max-w-[550px] w-full font-ubuntu font-medium text-black">
          No percent. For equipment, clothes and other purchases in installments
        </p>
      </div>
      <div className="p-5 sm:p-8 bg-[#EAECEE] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px] sm:min-w-[405px] grow-1">
        <CardIcon className="w-10 h-10" />
        <h2 className="mt-4 sm:mt-6 font-ubuntu md:max-w-[550px] w-full font-bold text-black text-2xl sm:text-3xl">
          Convenient deposit and withdrawal
        </h2>
        <p className="mt-4 text-sm sm:text-base  md:max-w-[550px] w-full  font-ubuntu font-medium text-black">
          At any ATM. Top up your credit card for free with cash or transfer from other cards
        </p>
      </div>
    </div>
  );
};
