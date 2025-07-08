import { NavLink, useLocation } from "react-router";

const LINKS = [
  {
    name: "Credit card",
    url: "/loan",
  },
  {
    name: "Product",
    url: "/product",
  },
  {
    name: "Account",
    url: "/account",
  },
  {
    name: "Resources",
    url: "/resources",
  },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="max-w-[1300px] box-content mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <nav className="flex justify-between items-center py-4">
        <NavLink to="/" className="text-2xl font-bold text-[#B4387A] hover:opacity-50 transition-opacity font-ubuntu">
          NeoBank
        </NavLink>
        <div className="hidden md:flex space-x-8 text-gray-600">
          {LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.url}
              className={[
                "hover:text-[#B2A35F] transition-colors text-base text-[#1D1929] font-bold font-ubuntu",
                location.pathname.includes(link.url) ? "text-[#B2A35F]" : "",
              ].join(" ")}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <button className="bg-[#003CFF] text-base font-bold cursor-pointer transition-colors hover:bg-[#7796C0] text-white py-4 px-4 leading-none font-ubuntu rounded-2xl">
          Online Bank
        </button>
      </nav>
    </header>
  );
};
