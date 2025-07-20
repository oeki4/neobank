import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { Tooltip } from "@/shared/ui/Tooltip/Tooltip.tsx";
import { Tab } from "@/shared/ui/Tabs/Tab.tsx";
import { GetCard } from "@/widgets/GetCard";
import { CardFAQ } from "./CardFAQ.tsx";
import { AboutCard } from "./AboutCard.tsx";
import { GET_CARD_STEP } from "@/shared/const/storageItems.ts";
import { CashbackCard } from "./CashbackCard.tsx";
import { CardRate } from "./CardRate.tsx";

export const LoanPage = () => {
  const step = Number(localStorage.getItem(GET_CARD_STEP)) || 1;
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
          <a
            href="#get-card"
            className="bg-[#003CFF] block mt-8 cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-colors font-bold hover:bg-[#7796C0] text-white py-4 px-4 leading-none font-ubuntu rounded-lg"
          >
            {step === 1 && "Apply for card"}
            {step === 2 && "Choose an offer"}
            {step === 3 && "Continue registration"}
          </a>
        </div>
        <div className="hidden xl:block max-w-[380px] shrink-0 w-full m-0 mr-20">
          <img src="/loan-card.webp" alt="loan-card" />
        </div>
      </section>
      <section className="mt-12">
        <Tabs>
          <Tab title="About card">
            <AboutCard />
          </Tab>
          <Tab title="Rates and conditions">
            <CardRate />
          </Tab>
          <Tab title="Cashback">
            <CashbackCard />
          </Tab>
          <Tab title="FAQ">
            <CardFAQ />
          </Tab>
        </Tabs>
      </section>
      <section className="mt-12 pb-24">
        <h2 className="w-full text-[30px] font-ubuntu font-bold text-center text-black">How to get a card</h2>
        <div className="mt-3.5 grid grid-cols-3 max-sm:gap-4 min-sm:max-md:gap-10 md:gap-18 lg:gap-24">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center lg:justify-start gap-9">
              <div className="w-12 h-12 shrink-0 flex justify-center items-center bg-[#D9D9D9] rounded-full">
                <p className="font-ubuntu font-bold text-xl text-black">1</p>
              </div>
              <div className="h-0.5 w-full hidden lg:block bg-[#80808033]"></div>
            </div>
            <p className="font-ubuntu font-medium text-sm sm:text-base text-black text-center lg:px-4.5">
              Fill out an online application - you do not need to visit the bank
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center lg:justify-start gap-9">
              <div className="w-12 h-12 shrink-0 flex justify-center items-center bg-[#D9D9D9] rounded-full">
                <p className="font-ubuntu font-bold text-xl text-black">2</p>
              </div>
              <div className="h-0.5 w-full hidden lg:block bg-[#80808033]"></div>
            </div>
            <p className="font-ubuntu font-medium text-sm sm:text-base text-black text-center lg:px-4.5">
              Find out the bank's decision immediately after filling out the application
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center lg:justify-start gap-9">
              <div className="w-12 h-12 shrink-0 flex justify-center items-center bg-[#D9D9D9] rounded-full">
                <p className="font-ubuntu font-bold text-xl text-black">3</p>
              </div>
              <div className="h-0.5 w-full hidden lg:block bg-[#80808033]"></div>
            </div>
            <p className="font-ubuntu font-medium text-sm sm:text-base text-black text-center lg:px-4.5">
              The bank will deliver the card free of charge, wherever convenient, to your city
            </p>
          </div>
        </div>
        <div id="get-card">
          <GetCard />
        </div>
      </section>
    </main>
  );
};
