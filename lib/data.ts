import corpcommentImg from "@/public/projects/project-1.png";
import rmtdevImg from "@/public/projects/project-2.png";
import wordanalyticsImg from "@/public/projects/project-3.png";
import React from "react";
import { BsFillTelephoneFill, BsTelegram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const links = [
    {
        title: "صفحه اصلی",
        hash: "#Home"
    },
    {
        title: "درباره من",
        hash: "#AboutMe"
    },
    {
        title: "پروژه ها",
        hash: "#Projects"
    },
    {
        title: "مهارت ها",
        hash: "#Skills"
    },
    {
        title: "تماس با من",
        hash: "#ContactMe"
    },

] as const


export const projectsData = [
    {
        title: "پروژه فروشگاهی",
        description:
            "پروژه فروشگاهی توسعه داده شده با ریکت و پیاده سازی امکاناتی مثل : سبد خرید / کد تخفیف / بخش پنل کاربری / طراحی کاملا واکنشگرا  ",
        tags: ["React", "Mui", "Tailwind", "Redux", "Redux-Toolkit", "React-Icons"],
        imageUrl: corpcommentImg,
        pUrl:"https://adorable-paprenjak-a0b743.netlify.app"
    },
    {
        title: "پروژه فروشگاهی",
        description:
        "توسعه پروژه فروشگاه موتور سیکلت با ui اختصاصی و پیاده سازی امکانات : سبد خرید / قالب کاملا واکنشگرا / بخش کد تخفیف / تم دارک / قالب داینامیک",
        tags: ["React", "Tailwind", "DaisyUi", "Redux", "Redux-Toolkit", "React-Icons"],
        imageUrl: rmtdevImg,
        pUrl:"/https://myshoping.iran.liara.run"
    },
    // {
    //     title: "Word Analytics",
    //     description:
    //         "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    //     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //     imageUrl: wordanalyticsImg,
    //     pUrl:"/https://myshoping.iran.liara.run"
    // },
] as const;

export const skills = [
    "Html",
    "Css",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Mui",
    "Redux",
    "Redux-Toolkit",
    "Git",
    "React",
    "Next-js",

]


export const contactWay = [
    {
        id: 1,
        icon: React.createElement(HiOutlineMail, { className: "text-xl" }),
        url: "mailto:hking4583@gmail.com",
        title: "hking4583@gmail.com"
    },
    {
        id: 2,
        icon: React.createElement(BsFillTelephoneFill, { className: "text-green-500 text-xl" }),
        url: "tel:09386804219",
        title: "09386804219"
    },
    {
        id: 3,
        icon: React.createElement(BsTelegram, { className: "text-blue-500 text-xl" }),
        url: "tel:https://t.me/Hashemi3418",
        title: "Hashemi3418"
    },
] as const