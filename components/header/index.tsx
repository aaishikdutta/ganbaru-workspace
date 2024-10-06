import Link from "next/link"
import { Logo } from "./logo"

export const Header = () => {

    return <header>
        <nav className="px-5 py-4 flex justify-between items-center">
            <div>
                <Logo />
            </div>
            <div className="flex gap-[20px] items-center">
                <Link href="/workspace" className="hover:text-light-accent dark:hover:text-dark-accent">workspace</Link>
                <Link href="/login" className="hover:text-light-accent dark:hover:text-dark-accent">login</Link>
            </div>
        </nav>
    </header>
}