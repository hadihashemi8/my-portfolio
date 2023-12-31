"use client"

import React from 'react'
import { motion } from "framer-motion"
import { links } from '@/lib/data'
import Link from 'next/link'
import { useActiveSectionContext } from '@/context/active-section'


export default function Header() {

    const {activeSection , setActiveSection , setTimeOfLastClick} = useActiveSectionContext()

    return (
        <header className='z-[999]  relative '>
            <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-700 dark:border-gray-700 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >

            </motion.div>
            <nav className='flex fixed top-[0.15rem]  left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ' >
                <ul className='flex flex-row-reverse w-[22rem]  flex-wrap items-center justify-center gap-y-2 text-[0.9rem]  font-medium text-gray-500 sm:w-[33rem] sm:flex-nowrap sm:gap-5'>
                    {links.map(item => (
                        <motion.li key={item.hash}
                            className='h-3/4 flex items-center justify-center relative dark:text-gray-200 dark:hover:text-gray-300'
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <a href={item.hash}
                                className={`flex w-full items-center justify-center p-3  hover:text-gray-950 transition ${activeSection == item.hash ? "text-gray-950 dark:text-gray-200" : ""}`}
                                onClick={() => {
                                    setTimeOfLastClick(Date.now())
                                    setActiveSection(item.hash)}}
                            >{item.title}</a>

                            {activeSection == item.hash && (
                                <motion.span className='absolute inset-0 bg-gray-200 rounded-full -z-10 dark:bg-gray-800'
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 450,
                                        damping: 30
                                    }}
                                ></motion.span>
                            )}

                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
