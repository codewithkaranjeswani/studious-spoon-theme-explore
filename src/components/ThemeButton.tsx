"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

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
      <button
        onClick={() => {
          console.log(theme);
          const val = theme === "light" ? "dark" : "light";
          console.log(val);
          setTheme(val);
        }}
        className="w-full first-letter:rounded bg-gray-900 px-2 py-4 text-sm text-white hover:opacity-80 dark:bg-white dark:text-gray-900"
      >
        Toggle Theme
      </button>
      <div className="w-full text-center p-4">theme = {myvar}</div>
    </div>
  );
}

export default ThemeButton;
