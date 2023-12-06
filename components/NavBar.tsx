import { cn } from '@/lib/utils'
import { Link, Menu } from 'lucide-react'
import { Poppins } from 'next/font/google'
import React from 'react'

const font = Poppins({
    weight: "600",
    subsets: ["latin"],
})

const NavBar = () => {
    return (
        <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary'>
            <div className='items-center flex'>
                <Menu className='block md:hidden w-6 h-6 text-primary' />
                <div
                    className={cn('hidden md:block ml-4 text-xl md:text-3xl font-bold text-primary', font.className)}>
                    MyIconGenerator.com
                </div>

            </div>
        </div>
    )
}

export default NavBar