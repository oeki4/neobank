import { CheckMark } from "@/shared/ui/Icons/CheckMark.tsx";
import { Slider } from "@/widgets/Slider";
import { ExchangeRates } from "@/widgets/ExchangeRates";
import { SubscribeEmail } from "@/widgets/SubscribeEmail";

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
      <ExchangeRates />
      <section className="mb-16">
        <h3 className="font-ubuntu font-medium text-[30px] leading-[50px] text-center mb-2 text-[#1C1C1E]">
          You can use our services anywhere in the world
        </h3>
        <p className="font-ubuntu font-medium text-base leading-[50px] text-[#1C1C1E] mb-12 text-center">
          Withdraw and transfer money online through our application
        </p>
        <img src="/map.webp" className="w-9/10 m-auto" alt="map" />
      </section>
      <div className="w-full overflow-hidden">
        <Slider />
      </div>
      <SubscribeEmail />
    </main>
  );
};
