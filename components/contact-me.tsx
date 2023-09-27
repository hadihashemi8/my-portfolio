"use client"

import React from 'react'
import SectionHeader from './section-header'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillTelephoneFill, BsTelegram } from 'react-icons/bs'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
import { contactWay } from '@/lib/data'
import ContactBox from './contactBox'




export default function ContactMe() {

    const { ref } = useSectionInView("#ContactMe")

    return (
        <section ref={ref} id="ContactMe" className='mb-20 sm:mb-28 scroll-mt-28'>
            <SectionHeader>تماس با من</SectionHeader>
            <div className='flex flex-col items-center md:flex-row gap-4'>

                {contactWay.map(item => (
                    <ContactBox key={item.id} {...item} />
                ))}

            </div>
        </section>
    )
}
