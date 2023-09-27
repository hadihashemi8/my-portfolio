import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { contactWay } from '@/lib/data'
import { useInView } from "framer-motion"

type ContactBoxProps = (typeof contactWay)[number]

export default function ContactBox({ title, url, icon }: ContactBoxProps) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    return (
        <motion.div
            className='w-52 h-36 px-8 py-4 rounded-xl shadow-lg bg-white flex flex-col 
                items-center justify-center gap-y-4 dark:bg-white/10 dark:text-white/80 dark:shadow-sm dark:shadow-white/80'
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s"
            }}
        >
            {icon}
            <a className='font-bold' href={url}>
                {title}
            </a>
        </motion.div>
    )
}
