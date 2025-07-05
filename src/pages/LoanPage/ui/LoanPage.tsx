import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { Tooltip } from "@/shared/ui/Tooltip/Tooltip.tsx";
import { Tab } from "@/shared/ui/Tabs/Tab.tsx";
import { PhotoIcon } from "@/shared/ui/Icons/PhotoIcon.tsx";
import { CalendarIcon } from "@/shared/ui/Icons/CalendarIcon.tsx";
import { ClockIcon } from "@/shared/ui/Icons/ClockIcon.tsx";
import { CartIcon } from "@/shared/ui/Icons/CartIcon.tsx";
import { CardIcon } from "@/shared/ui/Icons/CardIcon.tsx";

export const LoanPage = () => {
  return (
    <main className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content md:mt-5">
      <section className="px-6 lg:px-8 py-6 lg:py-8 bg-[#c9c9c9] flex justify-between gap-12 xl:gap-32 bg-gradient-to-t from-[#FEEBC8] to-[#CBD5E0] rounded-[28px]">
        <div className="w-full max-w-[650px]">
          <h2 className="font-ubuntu text-2xl sm:text-4xl lg:text-5xl text-white font-bold">
            Platinum digital credit card
          </h2>
          <p className="mt-6 lg:mt-12 font-ubuntu font-medium text-sm sm:text-base text-[#2D3748]">
            Our best credit card. Suitable for everyday spending and shopping.
            <br /> Cash withdrawals and transfers without commission and interest.
          </p>
          <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-0 justify-between items-center mt-8">
            <div className="flex flex-col gap-2.5">
              <p className="font-ubuntu font-bold leading-none text-lg lg:text-xl text-[#3D3D3D]">Up to 160 days</p>
              <Tooltip text="When repaying the full debt up to 160 days.">
                <p className="font-ubuntu text-sm font-medium leading-none text-[#3D3D3D]">No percent</p>
              </Tooltip>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="font-ubuntu font-bold leading-none text-lg lg:text-xl text-[#3D3D3D]">Up to 600 000 ₽</p>
              <Tooltip text="Over the limit willaccrue percent">
                <p className="font-ubuntu text-sm font-medium leading-none text-[#3D3D3D]">Credit limit</p>
              </Tooltip>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="font-ubuntu font-bold leading-none text-lg lg:text-xl text-[#3D3D3D]">0 ₽</p>
              <Tooltip text="Promotion valid until December 31, 2022.">
                <p className="font-ubuntu text-sm font-medium leading-none text-[#3D3D3D]">Card service is free</p>
              </Tooltip>
            </div>
          </div>
          <a className="bg-[#003CFF] block mt-8 cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-colors font-bold hover:bg-[#7796C0] text-white py-4 px-4 leading-none font-ubuntu rounded-lg">
            Apply for card
          </a>
        </div>
        <div className="hidden xl:block max-w-[380px] shrink-0 w-full m-0 mr-20">
          <img src="/loan-card.webp" alt="loan-card" />
        </div>
      </section>
      <section className="mt-12">
        <Tabs>
          <Tab title="About card">
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
          </Tab>
          <Tab title="Rates and conditions">
            <p>2</p>
          </Tab>
          <Tab title="All Events">
            <p>3</p>
          </Tab>
        </Tabs>
      </section>
    </main>
  );
};
