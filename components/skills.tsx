"use client"

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeader from './section-header'
import { skills } from '@/lib/data'
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {

    const { ref } = useSectionInView("#Skills")


    return (
        <section ref={ref} id="Skills" className="mb-28 max-w-[40rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeader>مهارت ها</SectionHeader>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skills.map((item, index) => (
                    <motion.li
                        key={index}
                        className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >{item}
                    </motion.li>
                ))}
            </ul>

        </section>
    )
}
