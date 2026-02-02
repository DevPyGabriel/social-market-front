import React, { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import HeroHeading from "./components/layout/HeroHeading";
import { SearchSection } from "./components/layout/SearchSection";
import { Category } from "./components/ui/Category";
import Searchbar from "./components/ui/Searchbar";
import Platform from "./components/ui/Platform";
import { MainGrid } from "./components/layout/MainGrid";
import CategoryTab from "./components/ui/CategoryTab";

function App() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    return saved || "system"; // 'system' | 'dark' | 'light'
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const apply = () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = theme === "dark" || (theme === "system" && prefersDark);
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
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
    <main className="min-h-screen bg-white dark:bg-dark">
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
    </main>
  );
}

export default App;
