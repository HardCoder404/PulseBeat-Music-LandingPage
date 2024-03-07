import React from 'react'
function CenterMenu() {

    const liStyle ="mr-[2.5rem] mt-[5.2px] text-[1.055rem] text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:cursor-pointer font-medium";

    const currentPage = " mr-[2.5rem] text-[1.39rem] text-white bg-blue-700 rounded md:bg-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-red-600 inline-block text-transparent bg-clip-text md:p-0 dark:text-white md:dark:text-blue-800 hover:cursor-pointer font-bold ";

  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={currentPage + "current"}>Discover</li>
            <li className={liStyle}>Genre</li>
            <li className={liStyle}>Events</li>
            <li className={liStyle}>Features</li>
            <li className={liStyle}>Premium</li>
        </ul>
    </div>
    )
}

export default CenterMenu