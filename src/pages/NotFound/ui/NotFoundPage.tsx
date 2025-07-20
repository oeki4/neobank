import { NavLink } from "react-router";

export const NotFoundPage = () => {
  return (
    <main className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content md:mt-5">
      <section className="w-full flex items-center justify-between max-lg:py-8">
        <div className="flex flex-col gap-8 max-lg:w-full max-lg:items-center">
          <h1 className="font-ubuntu font-bold text-3xl text-[#1C1C1E]">Oops....</h1>
          <h2 className="font-ubuntu font-medium text-3xl text-[#1C1C1E]">Page not found</h2>
          <p className="font-ubuntu font-medium text-base max-lg:text-center text-[#4B4B4B]">
            This Page doesn`t exist or was removed! We suggest you go back.
          </p>
          <NavLink
            to="/"
            className="bg-[#003CFF] cursor-pointer w-min whitespace-nowrap text-sm sm:text-base transition-colors font-bold hover:bg-[#7796C0] text-white py-2.5 px-16 leading-none font-ubuntu rounded-lg"
          >
            Go back
          </NavLink>
        </div>
        <img src="/not-found.webp" className="max-w-[526px] max-lg:hidden" alt="not-found" />
      </section>
    </main>
  );
};
