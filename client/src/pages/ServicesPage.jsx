import React, { useState, useEffect } from "react";
import {
  Header,
  HeroHeading,
  SearchSection,
  MainGrid,
} from "../components/sections/index.js";
import { Category, Searchbar, Platform, CategoryTab  } from "../components/ui/index.js"

export const ServicesPage = () => {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    return saved || "system"; // 'system' | 'dark' | 'light'
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const apply = () => {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const isDark = theme === "dark" || (theme === "system" && prefersDark);
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light",
      );
    };

    apply();

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => apply();
      if (mq.addEventListener) mq.addEventListener("change", handler);
      else mq.addListener(handler);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", handler);
        else mq.removeListener(handler);
      };
    }
  }, [theme]);

  // persist when user changes
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);
  
  return (
    <div className=" font-figtree mx-auto w-full max-w-275">
      <Header theme={theme} setTheme={setTheme} />
      <HeroHeading />
      <SearchSection className="flex-wrap gap-y-3 pb-6">
        <Category />
        <Platform />
        <Searchbar />
      </SearchSection>
      <CategoryTab />
      <MainGrid />
    </div>
  );
};
