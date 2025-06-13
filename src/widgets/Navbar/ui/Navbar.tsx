export const Navbar = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-[130px]">
      <nav className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-[#B4387A] font-ubuntu">NeoBank</div>
        <div className="hidden md:flex space-x-8 text-gray-600">
          <a href="#" className="hover:text-gray-900 text-base text-[#1D1929] font-bold font-ubuntu">
            Credit card
          </a>
          <a href="#" className="hover:text-gray-900 text-base text-[#1D1929] font-bold font-ubuntu">
            Product
          </a>
          <a href="#" className="hover:text-gray-900 text-base text-[#1D1929] font-bold font-ubuntu">
            Account
          </a>
          <a href="#" className="hover:text-gray-900 text-base text-[#1D1929] font-bold font-ubuntu">
            Resources
          </a>
        </div>
        <button className="bg-[#003CFF] text-base font-bold hover:bg-blue-700 text-white py-4 px-4 leading-none font-ubuntu rounded-2xl">
          Online Bank
        </button>
      </nav>
    </header>
  )
}