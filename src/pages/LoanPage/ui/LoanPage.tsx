import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { Tooltip } from "@/shared/ui/Tooltip/Tooltip.tsx";
import { Tab } from "@/shared/ui/Tabs/Tab.tsx";
import { PhotoIcon } from "@/shared/ui/Icons/PhotoIcon.tsx";
import { CalendarIcon } from "@/shared/ui/Icons/CalendarIcon.tsx";
import { ClockIcon } from "@/shared/ui/Icons/ClockIcon.tsx";
import { CartIcon } from "@/shared/ui/Icons/CartIcon.tsx";
import { CardIcon } from "@/shared/ui/Icons/CardIcon.tsx";
import { Accordion } from "@/shared/ui/Accordion/Accordion.tsx";
import { GetCardForm } from "./GetCardForm.tsx";

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
            <div className="flex flex-col w-full">
              <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3 pt-6 border-b border-[#7F92AC]">
                <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">Card currency</p>
                <p className="col-span-2 font-ubuntu text-sm text-end sm:text-start sm:text-base font-medium text-[#434343]">
                  Rubles, dollars, euro
                </p>
              </div>
              <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3-3 pt-6 border-b border-[#7F92AC]">
                <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">
                  Interest free period
                </p>
                <p className="col-span-2 font-ubuntu text-sm text-end sm:text-start sm:text-base font-medium text-[#434343]">
                  0% up to 160 days
                </p>
              </div>
              <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3 pt-6 border-b border-[#7F92AC]">
                <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">Payment system</p>
                <p className="col-span-2 font-ubuntu text-sm sm:text-base text-end sm:text-start font-medium text-[#434343]">
                  Mastercard, Visa
                </p>
              </div>
              <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3 pt-6 border-b border-[#7F92AC]">
                <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">
                  Maximum credit limit on the card
                </p>
                <p className="col-span-2 font-ubuntu text-sm text-end sm:text-start sm:text-base font-medium text-[#434343]">
                  600 000 ₽
                </p>
              </div>
              <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3 pt-6 border-b border-[#7F92AC]">
                <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">
                  Replenishment and withdrawal
                </p>
                <p className="col-span-2 font-ubuntu text-sm text-end sm:text-start sm:text-base font-medium text-[#434343]">
                  At any ATM. Top up your credit card for free with cash or transfer from other cards
                </p>
              </div>
              <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3 pt-6 border-b border-[#7F92AC]">
                <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">
                  Max cashback per month
                </p>
                <p className="col-span-2 font-ubuntu text-sm text-end sm:text-start sm:text-base font-medium text-[#434343]">
                  15 000 ₽
                </p>
              </div>
              <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3 pt-6 border-b border-[#7F92AC]">
                <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">Transaction Alert</p>
                <p className="col-span-2 font-ubuntu text-end sm:text-start text-sm sm:text-base font-medium text-[#434343]">
                  60 ₽ — SMS or push notifications
                  <br />0 ₽ — card statement, information about transactions in the online bank
                </p>
              </div>
            </div>
          </Tab>
          <Tab title="Cashback">
            <div className="w-full grid grid-cols-1 md:max-lg:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="p-5 sm:p-8 bg-[#EAECEE] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px]">
                <p className="mt-4 text-sm sm:text-base w-full font-ubuntu font-medium text-black">
                  For food delivery, cafes and restaurants
                </p>
                <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">5%</h2>
              </div>
              <div className="p-5 sm:p-8 bg-[#88B3B899] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px]">
                <p className="mt-4 text-sm sm:text-base w-full font-ubuntu font-medium text-black">
                  In supermarkets with our subscription
                </p>
                <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">5%</h2>
              </div>
              <div className="p-5 sm:p-8 bg-[#EAECEE] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px]">
                <p className="mt-4 text-sm sm:text-base w-full font-ubuntu font-medium text-black">
                  In clothing stores and children's goods
                </p>
                <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">2%</h2>
              </div>
              <div className="p-5 sm:p-8 bg-[#88B3B899] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px]">
                <p className="mt-4 text-sm sm:text-base w-full font-ubuntu font-medium text-black">
                  Other purchases and payment of services and fines
                </p>
                <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">1%</h2>
              </div>
              <div className="p-5 sm:p-8 bg-[#EAECEE] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px]">
                <p className="mt-4 text-sm sm:text-base w-full font-ubuntu font-medium text-black">
                  Shopping in online stores
                </p>
                <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">up to 3%</h2>
              </div>
              <div className="p-5 sm:p-8 bg-[#88B3B899] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px]">
                <p className="mt-4 text-sm sm:text-base w-full font-ubuntu font-medium text-black">
                  Purchases from our partners
                </p>
                <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">30%</h2>
              </div>
            </div>
          </Tab>
          <Tab title="FAQ">
            <h2 className="text-ubuntu font-bold text-[30px] text-black">Issuing and receiving a card</h2>
            <Accordion
              className="mt-6 sm:mt-8"
              items={[
                {
                  title: "How to get a card?",
                  text: "We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.",
                },
                {
                  title: "What documents are needed and how old should one be to get a card?",
                  text: "Need a passport. You must be between 20 and 70 years old.",
                },
                {
                  title: "In what currency can I issue a card?",
                  text: "In rubles, dollars or euro",
                },
                {
                  title: "How much income do I need to get a credit card?",
                  text: "To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.",
                },
                {
                  title: "How do I find out about the bank's decision on my application?",
                  text: "After registration, you will receive an e-mail with a decision on your application.",
                },
              ]}
            />
            <h2 className="text-ubuntu font-bold text-[30px] text-black mt-6 sm:mt-8">Using a credit card</h2>
            <Accordion
              className="mt-6 sm:mt-8"
              items={[
                {
                  title: "What is an interest free credit card?",
                  text: "A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.",
                },
                {
                  title: "How to activate a credit card",
                  text: "You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.",
                },
                {
                  title: "What is a settlement date?",
                  text: "The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.",
                },
                {
                  title: "What do I need to know about interest rates?",
                  text: "For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.",
                },
              ]}
            />
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
        <GetCardForm />
      </section>
    </main>
  );
};
