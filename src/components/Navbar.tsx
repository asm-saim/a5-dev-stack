import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLogo from "../assets/logo-text.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-amber-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4">
        {/* Left: Hamburger (mobile only) */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-1">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Logo: centered on mobile, left on desktop */}
        <div className="md:order-first">
          <img src={NavLogo} alt="Logo" className="h-8 md:h-10" />
        </div>

        {/* Center: Nav links (desktop only) */}
        <div className="hidden md:block">
          <ul className="flex justify-between items-center gap-5 text-[#475569FF] font-medium text-base">
            <li className="text-[#db2777] cursor-pointer">Home</li>
            <li className="cursor-pointer">Technologies</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex gap-2 sm:gap-4 items-center justify-around">
          <button className="font-medium text-sm sm:text-base">Sign In</button>
          <button className="font-medium text-sm sm:text-base px-3 sm:px-5 py-1.5 sm:py-2 btn btn-secondary bg-[#d91b7eFF] text-white rounded-full border-none">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-100 border-t border-amber-200">
          <ul className="flex flex-col gap-4 px-6 py-4 text-[#475569FF] font-medium text-base">
            {navLinks.map((link) => (
              <li
                key={link}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer ${link === "Home" ? "text-[#db2777]" : ""}`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
