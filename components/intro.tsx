"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsInstagram } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section'


export default function Intro() {

    const { ref } = useSectionInView("#Home")
    const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext()

    return (
        <section ref={ref} className='max-w-[50rem] mb-24 sm:mb-36 scroll-mt-[100rem]' id="Home">

            <div className='flex items-center justify-center'>
                <motion.div className='relative'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        delay: 0.1
                    }}
                >
                    <Image
                        className='p-1 w-[120px] object-cover  rounded-full border-[0.35rem] border-white shadow-xl'
                        src="/img.png"
                        alt='profile'
                        width="190"
                        height="190"
                        quality={95}
                        priority={true}
                    />
                </motion.div>
            </div>

            <motion.h1 className='mb-10 mt-4 text-xl sm:text-3xl  font-medium !leading-[1.5] text-center'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                هادی هاشمی هستم برنامه نویسی و توسعه وبسایت رو از اوایل سال 1401 شروع کردم و در حال حاضر فرانت کار میکنم
            </motion.h1>



            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4  font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#ContactMe"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("#ContactMe");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    تماس با من{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/CV.pdf"
                    download
                >
                    دانلود رزومه{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://instagram.com/h_hashemi8?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    target="_blank"
                >
                    <BsInstagram />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/hadihashemi8"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
