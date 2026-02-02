import { Icons } from "../Icons";

export const MenuBtn = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="size-11 flex items-center justify-center rounded-full bg-gray-200 dark:bg-black text-sm text-black dark:text-white sm:hidden cursor-pointer"
    >
      <Icons.Menu color="currentColor" />
    </button>
  );
};

export default MenuBtn;
