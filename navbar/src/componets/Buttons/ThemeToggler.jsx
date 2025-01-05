import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDevices } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../store/themeSwitcher";
function ThemeToggler() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const curretnMode = useSelector((state) => state.theme.theme);
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark':'light';
  
  const handleThemeSwitcher = (mode)=>{
    dispatch(toggleMode(mode))
    setShowMenu(false)
  }
  useEffect(()=>{
    document.body.classList.add(curretnMode);
    return()=>document.body.classList.remove(curretnMode)
  },[toggleMode,curretnMode])
  return (
    <div className="px-3 py-2 ralative rounded-full dark:hover:border-neutral-800 border-s dark:border-neutral-700 border-neutral-400 bg-transparent ring dark:ring-neutral-700 ">
      <p className="flex cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        {
          curretnMode == 'dark'? 
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            className="fill-transparent"
          ></path>
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            className="fill-slate-400 dark:fill-slate-500"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            className="fill-slate-400 dark:fill-slate-500 dark:text-violet-700"
          ></path>
        </svg>
        : <CiLight className="w-6 h-6"/>
        }
        
        <span>{}</span>
      </p>

      {showMenu && (
        <ul className=" mt-7 right-8 absolute p-2 bg-gray-200 dark:text-white/80 text-neutral-900 dark:bg-gray-800 rounded-lg shadow-lg">
          {/* <hr className=" py-2" /> */}

          <li
            onClick={() =>  handleThemeSwitcher("light")}
            className="cursor-pointer py-1 flex gap-2 items-center hover:bg-gray-300  font-serif  dark:hover:bg-gray-900 px-1 rounded"
          >
            <CiLight className="inline text-2xl text-violet-600" />
            <span className="">Light</span>
          </li>
          <li
            onClick={() =>  handleThemeSwitcher('dark')}
            className="cursor-pointer py-1 flex gap-2 items-center hover:bg-gray-300  font-serif  dark:hover:bg-gray-900 px-1 rounded"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className="fill-transparent"
              ></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className="fill-slate-400 dark:fill-slate-500"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className="fill-slate-400 dark:fill-slate-500 "
              ></path>
            </svg>
            <span>Dark</span>
          </li>
          <li
            onClick={() => handleThemeSwitcher(prefersDarkMode) }
            className="cursor-pointer py-1 flex gap-2 items-center hover:bg-gray-300  font-serif  dark:hover:bg-gray-900 px-1 rounded"
          >
            <MdDevices className="inline text-xl text-violet-500" />
            <span>Device Mode</span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ThemeToggler;
