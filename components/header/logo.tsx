'use client'

import Image from "next/image"

import logo_dark from '../../public/assets/icons8-sushi-52.png'
import logo_light from '../../public/assets/icons8-sushi-52-light-mode.png'

export const Logo = () => {

    return <div>
        <Image src={logo_dark} height={40} width={40} alt="ganbaru-logo" className="hidden dark:block" fetchPriority="high" />
        <Image src={logo_light} height={40} width={40} alt="ganbaru-logo" className="block dark:hidden" fetchPriority="high" />
    </div>
}