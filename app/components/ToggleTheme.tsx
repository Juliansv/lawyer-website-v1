"use client"

import { useState, useEffect } from "react"

const ToggleTheme = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = window.localStorage.getItem('theme')
        if (theme === "dark") {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            window.localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            window.localStorage.setItem('theme', 'light')
        }
    }, [darkMode])
  return (
    <button onClick={() => setDarkMode(!darkMode)} className="w-16 h-16 bg-slate-900 dark:bg-white rounded-full text-white dark:text-black font-semibold">
        {darkMode ? '🌞' : '🌜'}
    </button>
  )
}

export default ToggleTheme