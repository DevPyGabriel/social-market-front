import { Icons } from "../Icons";
import { useState } from "react";
import ThemeBtn from "../ui/ThemeBtn";
import Login from "../ui/AccentBtn";
import Signup from "../ui/Signup";
import MenuBtn from "../ui/MenuBtn";

export const Header = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" py-2 sm:py-3 fixed top-0 w-full px-2 sm:px-3 max-w-275 z-50">
      <header className="flex items-center justify-between">
        <MenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="sm:flex sm:items-center sm:justify-center gap-x-8 lg:gap-x-16 bg-black dark:bg-card-dark text-white hidden sm:px-12 md:px-16 lg:px-48 h-11 rounded-full tracking-tight font-medium">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">API</a>
        </div>

        <div className="flex items-center justify-center gap-x-2">
          <Login className="h-10.5 2xs:h-11 px-3 2xs:px-4 sm:px-6 font-medium text-sm 2xs:text-base">Iniciar sesión</Login>
          <Signup>Registrarse</Signup>
          <div className="cursor-pointer">
            <ThemeBtn theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </header>

      <div className="absolute pt-2">
        <div
          id="mobile-menu"
          role="menu"
          aria-hidden={!isOpen}
          className={`transform origin-top transition-all duration-200 ease-out sm:hidden z-50 ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
        >
          <div className="flex flex-col items-center justify-center px-6 py-4 text-white bg-black rounded-xl gap-y-2 tracking-tight font-medium">
            <a href="#" onClick={() => setIsOpen(false)}>
              Inicio
            </a>
            <div className="h-px w-9/12 bg-white/15"></div>
            <a href="#" onClick={() => setIsOpen(false)}>
              Servicios
            </a>
            <div className="h-px w-9/12 bg-white/15"></div>
            <a href="#" onClick={() => setIsOpen(false)}>
              API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
