"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [myvar, setMyvar] = useState("");
  useEffect(() => {
    const tmp = theme ? theme : "Theme is null";
    console.log(tmp);
    setMyvar(tmp);
  }, [setMyvar, theme]);
  return (
    <div>
      <div className="flex justify-center py-8">
        <button
          onClick={() => {
            console.log(theme);
            const val = theme === "light" ? "dark" : "light";
            console.log(val);
            setTheme(val);
          }}
          className="bg-gray-700 px-2 py-2 text-sm text-white first-letter:rounded hover:opacity-80"
        >
          Toggle Theme
        </button>
      </div>
      <div className="flex w-full justify-center text-sm p-4 py-4">Current theme = {myvar}</div>
    </div>
  );
}

export default ThemeButton;
