"use client"

import React, { createContext, useState, useContext } from "react"
import { sectionName } from "@/lib/types"

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

type ActiveSectionContext = {
    activeSection: sectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContext | null>(null)


export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {

    const [activeSection, setActiveSection] = useState<sectionName>("#Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    )

}


export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}