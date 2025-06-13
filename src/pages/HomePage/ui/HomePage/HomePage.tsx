export const HomePage = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-between flex-wrap md:flex-nowrap gap-y-4 gap-x-8">
          <div className="w-full md:max-w-[610px] flex flex-col gap-9">
            <h1 className="font-ubuntu font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
              Choose the design you like and apply for card right now
            </h1>
            <button className="bg-[#003CFF] cursor-pointer w-min whitespace-nowrap text-sm sm:text-base font-bold hover:bg-blue-700 text-white py-4 px-4 leading-none font-ubuntu rounded-2xl">
              Choose the card
            </button>
          </div>
          <div className="w-full md:max-w-[516px] flex flex-wrap">
            <img src="/cards.png" alt="cards" />
          </div>
        </div>
      </section>
    </main>
  );
};
