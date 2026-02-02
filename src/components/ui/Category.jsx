import React, { useState, useRef, useEffect } from "react";
import { Icons } from "../Icons";

export const Category = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const listIconClass = "text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white";
  const liContainerClass = "flex items-center";
  const liDivClass = "flex items-center gap-x-1 my-1.5 hover:bg-black/10 dark:hover:bg-white/5 rounded-md p-1.5 w-full cursor-pointer hover:text-black dark:hover:text-white group";

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="dark:text-white text-black relative font-medium tracking-tight"
    >
      <button
        id="dropdown-category"
        aria-labelledby="dropdown-button-category"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center bg-item-bg dark:bg-card-dark w-fit gap-x-2 rounded-full pl-1 pr-3 py-1"
      >
        <div className="h-8 w-8 flex items-center justify-center bg-bg dark:bg-dark rounded-full dark:text-white text-black">
          <Icons.Filter />
        </div>
        Categorias
        <div
          className={`dark:text-white text-black transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        >
          <Icons.Arrow />
        </div>
      </button>
      <div
        className={`z-10 absolute bg-item-bg dark:bg-card-dark rounded-xl w-full mt-2 px-3 py-1 transform transition-all duration-200 ease-out origin-top ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}
        aria-labelledby="dropdown-button-category"
        aria-hidden={!open}
      >
        <ul className="text-black/70 dark:text-white/60 divide-y dark:divide-white/10 divide-black/10 font-normal flex flex-col">
          <li className={liContainerClass}>
            <div className={liDivClass}>
              <div className={listIconClass}>
                <Icons.Tiktok size={18} />
              </div>
              Tiktok
            </div>
          </li>
          <li className={liContainerClass}>
            <div className={liDivClass}>
              <div className={listIconClass}>
                <Icons.Instagram size={18} />
              </div>
              Instagram
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
