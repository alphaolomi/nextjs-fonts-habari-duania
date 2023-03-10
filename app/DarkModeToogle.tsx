'use client';

import useDarkMode from "./useDarkMode";

// use sun emoji and moon for the toggle
// style using tailwindcss
export default function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <button
        className="fixed p-2 text-4xl bg-gray-100 rounded-full top-1 right-2 dark:bg-gray-800"
        onClick={toggleDarkMode}
        >
        {darkMode ? "🌞" : "🌚"}
        </button>
    );
    }   
