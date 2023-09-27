
import React from 'react'

type SectionHeaderProps = {
    children: React.ReactNode
}

export default function SectionHeader({ children } : SectionHeaderProps) {
    return (
        <h2 className='text-3xl  font-bold mb-8 text-center'>{children}</h2>

    )
}
