import SunIcon from "@/components/icons/SunIcon"
import MoonIcon from "@/components/icons/MoonIcon"
import { useEffect, useState } from "react";

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "dark";
};

function Header() {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState());

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!hasMounted) {
    return <>Cargando...</>;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="flex justify-between dark:text-white text-blue-900">
      <h1 className="font-bold text-3xl">devfinder</h1>
      <div className="flex items-center gap-2">
        <h2 className="uppercase tracking-[0.3rem] font-bold">{theme === "light" ? "light" : "dark"}</h2>
        <button onClick={handleTheme}>
          {
            theme === "light" ?
              <SunIcon className="dark:fill-white fill-blue-900" /> : <MoonIcon className="dark:fill-white fill-blue-900" />
          }
        </button>
      </div>
    </header>
  )
}
export default Header