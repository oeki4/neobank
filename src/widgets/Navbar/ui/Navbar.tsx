import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <header className="max-w-[1300px] box-content mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <nav className="flex justify-between items-center py-4">
        <NavLink to="/" className="text-2xl font-bold text-[#B4387A] hover:opacity-50 transition-opacity font-ubuntu">
          NeoBank
        </NavLink>
        <div className="hidden md:flex space-x-8 text-gray-600">
          <a href="#" className="hover:text-[#B2A35F] transition-colors text-base text-[#1D1929] font-bold font-ubuntu">
            Credit card
          </a>
          <a href="#" className="hover:text-[#B2A35F] transition-colors text-base text-[#1D1929] font-bold font-ubuntu">
            Product
          </a>
          <a href="#" className="hover:text-[#B2A35F] transition-colors text-base text-[#1D1929] font-bold font-ubuntu">
            Account
          </a>
          <a href="#" className="hover:text-[#B2A35F] transition-colors text-base text-[#1D1929] font-bold font-ubuntu">
            Resources
          </a>
        </div>
        <button className="bg-[#003CFF] text-base font-bold cursor-pointer transition-colors hover:bg-[#7796C0] text-white py-4 px-4 leading-none font-ubuntu rounded-2xl">
          Online Bank
        </button>
      </nav>
    </header>
  );
};
