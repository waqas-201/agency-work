'use client'

import { useTheme } from "next-themes"
import Image from "next/image"

const Logo = () => {
    const theme = useTheme()
    return (
        <Image

            src={`${theme.theme === "dark" ? "/SRIXUS-LOGO-DARK.svg" : "/SRIXUS-LOGO-WHITE.svg"}`}
            alt="Patient portal dashboard interface"
            width={120}
            height={80}
            className="max-w-full h-auto"
            priority
        />
    )
}

export default Logo