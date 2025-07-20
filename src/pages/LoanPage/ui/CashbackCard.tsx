export const CashbackCard = () => {
  return (
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
        <p className="mt-4 text-sm sm:text-base w-full font-ubuntu font-medium text-black">Shopping in online stores</p>
        <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">up to 3%</h2>
      </div>
      <div className="p-5 sm:p-8 bg-[#88B3B899] flex shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] flex-col box-border rounded-[28px]">
        <p className="mt-4 text-sm sm:text-base w-full font-ubuntu font-medium text-black">
          Purchases from our partners
        </p>
        <h2 className="mt-4 sm:mt-6 font-ubuntu font-bold text-black text-2xl sm:text-3xl">30%</h2>
      </div>
    </div>
  );
};
