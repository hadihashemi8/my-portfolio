"use client"

import React from 'react'
import SectionHeader from './section-header'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
import Link from 'next/link'




export default function AboutMe() {

    const { ref } = useSectionInView("#AboutMe")


    return (
        <motion.section className='mb-24 sm:mb-36 max-w-[45rem] text-center leading-8 scroll-mt-28'
            id="AboutMe"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            ref={ref}
        >
            <SectionHeader>
                درباره من
            </SectionHeader>
            
            <p className='pb-3 text-justify ' dir='rtl'>
                 با سلام هادی هاشمی متولد 1381/1/7 و اهل ارومیه هستم . <br/> سال 1401 به صورت اتفاقی وارد دنیای بزرگ برنامه نویسی شدم و به مرور زمان علاقه من به یادگیری و پیشرفت در این حوزه بسیار زیاد شد و تصمیم گرفتم در حوزه توسعه وبسایت تمرکز کنم و سعی کنم بهترین خودم باشم . عاشق چالش های برنامه نویسی و یادگیری هستم و در این مدت با ابزار های زیادی در کنار پروژه ها کار کردم . درحال حاضر در بخش فرانت (نکست) کار میکنم و درآینده هدفم یادگیری بخش بکند و در نهایت تبدیل به برنامه نویس فول استک هست . 
            </p>
        </motion.section>
    )
}
