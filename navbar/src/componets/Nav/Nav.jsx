import React from 'react'
import BtnPrimary from '../Buttons/BtnPrimary'
import ThemeToggler from '../Buttons/ThemeToggler'

function Nav({navItems}) {
  return (
   <div className='w-full'>
    <nav className='flex justify-between items-center p-3 rounded-lg bg-gray-200 dark: dark:bg-slate-900  dark:text-white'>
        <div>
            <span className=''>pixel</span>
            <span className='font-bold  dark:text-fuchsia-700'>perfect</span>
        </div>
        <div>
        <ul className='md:flex flex-wrap items-center gap-4 hidden'>
            <li className='cursor-pointer'>Work</li>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>Careers</li>
            <li className='cursor-pointer'>Contact</li>
            <BtnPrimary> Get a Quote</BtnPrimary>
            <ThemeToggler />
        </ul>
        
        </div>
    </nav>
   </div>
  )
}

export default Nav