import { NavLink } from "react-router";
import { FOOTER_LINKS } from "@/shared/const/footerLinks.ts";

export const Footer = () => {
  return (
    <footer className="bg-[#B2B2B233] py-24 box-content">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 box-content">
        <div className="flex justify-between mb-8 flex-wrap gap-4">
          <img src="/logo.webp" alt="logo" className="max-w-[158px] max-h-[50px]" />
          <div className="flex flex-col gap-1.5">
            <a href="tel:74959842513" className="text-3xl font-ubuntu font-bold mb-1.5">
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className="text-[#2D3748] text-base font-ubuntu font-medium">
              info@neoflex.ru
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-7">
          {FOOTER_LINKS.map((link) => (
            <NavLink className="text-base font-ubuntu font-medium" to="/">
              {link}
            </NavLink>
          ))}
        </div>
        <div className="h-0.5 bg-white w-full mb-8"></div>
        <p className="text-base font-ubuntu font-medium">
          We use cookies to personalize our services and improve the user experience of our website. Cookies are small
          files containing information about previous visits to a website. If you do not want to use cookies, please
          change your browser settings
        </p>
      </div>
    </footer>
  );
};
