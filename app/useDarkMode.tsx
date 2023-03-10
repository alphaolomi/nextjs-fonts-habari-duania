'use client'
import { useEffect, useState } from 'react'

// add or remove dark mode class in html element
export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  // check the dark mode class in html element
  useEffect(() => {
    const html = document.querySelector('html')
    if (html) {
      setDarkMode(html.classList.contains('dark'))
    }
  }, [])

  const toggleDarkMode = () => {
    const html = document.querySelector('html')
    if (html) {
      html.classList.toggle('dark')
      setDarkMode(!darkMode)
    }
  }

  return { darkMode, toggleDarkMode }
}
