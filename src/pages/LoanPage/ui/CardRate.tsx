export const CardRate = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3 pt-6 border-b border-[#7F92AC]">
        <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">Card currency</p>
        <p className="col-span-2 font-ubuntu text-sm text-end sm:text-start sm:text-base font-medium text-[#434343]">
          Rubles, dollars, euro
        </p>
      </div>
      <div className="pb-6 flex gap-4 items-center justify-between md:grid md:grid-cols-3-3 pt-6 border-b border-[#7F92AC]">
        <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">Interest free period</p>
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
        <p className="col-span-1 font-ubuntu text-sm sm:text-base text-black font-medium">Max cashback per month</p>
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
  );
};
