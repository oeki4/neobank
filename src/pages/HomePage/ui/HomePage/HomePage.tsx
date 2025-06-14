import { CheckMark } from "@/shared/ui/Icons/CheckMark";
import { BankIcon } from "@/shared/ui/Icons/BankIcon.tsx";
import { NavLink } from "react-router";
import { MailIcon } from "@/shared/ui/Icons/MailIcon.tsx";
import { SendIcon } from "@/shared/ui/Icons/SendIcon.tsx";

export const HomePage = () => {
  return (
    <main className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 box-content md:mt-[130px]">
      <section>
        <div className="w-full flex justify-between flex-wrap md:flex-nowrap gap-y-4 gap-x-8 mb-30">
          <div className="w-full md:max-w-[610px] flex flex-col gap-9">
            <h1 className="font-ubuntu font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
              Choose the design you like and apply for card right now
            </h1>
            <button className="bg-[#003CFF] cursor-pointer w-min whitespace-nowrap text-sm sm:text-base transition-colors font-bold hover:bg-[#7796C0] text-white py-4 px-4 leading-none font-ubuntu rounded-2xl">
              Choose the card
            </button>
          </div>
          <div className="w-full md:max-w-[516px] flex flex-wrap">
            <img src="/cards.webp" alt="cards" />
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row justify-between gap-12 mb-12">
        <img src="/person.svg" className="w-full max-w-full md:max-w-[508px]" alt="person" />
        <div className="font-rubik">
          <h2 className="font-medium text-[35px] text-[#0B132A] mb-5">We Provide Many Features You Can Use</h2>
          <p className=" text-base text-[#4F5665] mb-6">
            You can explore the features that we provide with fun and have their own functions each feature
          </p>
          <ul className="flex flex-col gap-3">
            <li className="text-[#4F5665] flex gap-4 text-sm">
              <CheckMark className="w-6 h-6" />
              Powerfull online protection.
            </li>
            <li className="text-[#4F5665] flex gap-4 text-sm">
              <CheckMark className="w-6 h-6" />
              Cashback without borders.
            </li>
            <li className="text-[#4F5665] flex gap-4 text-sm">
              <CheckMark className="w-6 h-6" />
              Personal design
            </li>
            <li className="text-[#4F5665] flex gap-4 text-sm">
              <CheckMark className="w-6 h-6" />
              Work anywhere in the world
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-4 rounded-2xl bg-[#c9c9c9] bg-gradient-to-t from-[#c9c9c9] to-[#f0f0f0] p-8 mb-12">
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="font-ubuntu font-medium text-[30px] text-[#1C1C1E]">Exchange rate in internet bank</h3>
          <p className="font-ubuntu font-medium text-base">Update every 15 minutes, MSC 09.08.2022</p>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <p className="font-ubuntu font-medium text-xl leading-12 mb-8">Currency</p>
        </div>
        <div className="flex justify-between items-center flex-wrap mb-12">
          <div className="flex flex-wrap md:grid md:grid-cols-3 gap-8">
            <div className="font-ubuntu font-bold flex gap-5">
              <p className="text-[#808080] text-xl leading-5">USD:</p>
              <p className="text-black text-xl leading-5">60.78</p>
            </div>
            <div className="font-ubuntu font-bold flex gap-5">
              <p className="text-[#808080] text-xl leading-5">CNY:</p>
              <p className="text-black text-xl leading-5">9.08</p>
            </div>
            <div className="font-ubuntu font-bold flex gap-5">
              <p className="text-[#808080] text-xl leading-5">CHF:</p>
              <p className="text-black text-xl leading-5">64.78</p>
            </div>
            <div className="font-ubuntu font-bold flex gap-5">
              <p className="text-[#808080] text-xl leading-5">USD:</p>
              <p className="text-black text-xl leading-5">60.78</p>
            </div>
            <div className="font-ubuntu font-bold flex gap-5">
              <p className="text-[#808080] text-xl leading-5">JPY:</p>
              <p className="text-black text-xl leading-5">0.46</p>
            </div>
            <div className="font-ubuntu font-bold flex gap-5">
              <p className="text-[#808080] text-xl leading-5">TRY:</p>
              <p className="text-black text-xl leading-5">3.39</p>
            </div>
          </div>
          <BankIcon className="max-w-[120px] hidden md:block" />
        </div>
        <NavLink
          className="font-ubuntu hover:opacity-50 transition-opacity font-bold text-white text-xl leading-5"
          to="/"
        >
          All courses
        </NavLink>
      </section>
      <section className="mb-16">
        <h3 className="font-ubuntu font-medium text-[30px] leading-[50px] text-center mb-2 text-[#1C1C1E]">
          You can use our services anywhere in the world
        </h3>
        <p className="font-ubuntu font-medium text-base leading-[50px] text-[#1C1C1E] mb-12 text-center">
          Withdraw and transfer money online through our application
        </p>
        <img src="/map.webp" className="w-9/10 m-auto" alt="map" />
      </section>
      <section className="mb-[100px]">
        <h4 className="text-2xl font-ubuntu font-bold text-center text-[#EB801D] mb-[30px]">Support</h4>
        <p className="text-3xl font-ubuntu font-bold text-center text-[#1C1C1E] mb-6">Subscribe Newsletter & get</p>
        <p className="text-3xl font-ubuntu font-medium text-center text-[#1C1C1E] mb-10">Bank News</p>
        <div className="flex justify-center">
          <div className="px-4 md:px-8 py-5 bg-white shadow-[0_10px_20px_rgba(54,58,120,0.1)] flex flex-col w-full sm:w-auto gap-y-4 sm:flex-row rounded-2xl">
            <div className="flex">
              <MailIcon className="w-7" />
              <input
                type="email"
                placeholder="Your email"
                className="outline-0 placeholder:text-[#9092B0] placeholder:font-nunito font-nunito px-2 w-full"
              />
            </div>
            <button className="bg-[#686DF1] rounded-3xl cursor-pointer justify-center sm:justify-start hover:opacity-50 transition-opacity flex items-center pl-3.5 pr-7 py-2 sm:py-0.5 text-base font-ubuntu font-bold text-white">
              <SendIcon className="w-6 mr-2.5" />
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
