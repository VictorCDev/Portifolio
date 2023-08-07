import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill, BsDownload } from 'react-icons/bs'
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

const Navbar = () => {

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChenger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsFillSunFill className="w-7 h-7" role="button" onClick={() => setTheme('ligth')} />
      )
    }
    else {
      return (
        <BsFillMoonStarsFill className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
      )
    }
  }

  return (
    <div>
      <nav className='py-10 mb-12 flex justify-between md:px-20'>
        <h1 className='text-2xl font-burtons dark:text-white'>developbyvh</h1>
        <ul className='flex items-center'>
          <li>
            {renderThemeChenger()}
          </li>
          <li>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="Victor Cunha Curriculo.pdf" download> Download CV</a>
          </li>

        </ul>

      </nav>
    </div>
  )
}

export default Navbar