"use client"

import React from 'react'
import SectionHeader from './section-header'
import SendBtn from './sendBtn'
import { useSectionInView } from '@/lib/hooks'


export default function Contactme() {

    const { ref } = useSectionInView("#ContactMe")

    return (
        <section ref={ref} id="ContactMe" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">

            <SectionHeader>تماس با من</SectionHeader>

            <p className="text-gray-700 -mt-5 text-center ">
                <a className="underline" href="mailto:hking4583@gmail.com">
                    hking4583@gmail.com
                </a>{" "} : جهت ارتباط با من با این ایمیل در ارتباط باشید
                <br />
                یا این فرم را پر کنید



            </p>


            <form
                className="mt-10 flex flex-col dark:text-black"
               >

                <input
                    dir='rtl'
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="ایمیل شما"
                />
                <textarea
                    dir='rtl'
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="متن شما"
                    required
                    maxLength={5000}
                />
                <SendBtn />

            </form>

        </section>
    )
}
