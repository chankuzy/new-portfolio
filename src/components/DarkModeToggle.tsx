import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(savedMode ? JSON.parse(savedMode) : systemPrefersDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
    
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark, mounted]);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full">
        <Moon className="opacity-0" size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}