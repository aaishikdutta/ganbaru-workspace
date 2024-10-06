import Link from "next/link";
import { Suspense } from "react";

export default function Workspace() {
    return <div className="flex-grow h-full">
        <h1 className="text-5xl md:text-7xl font-bold">Hello User.</h1>
        <p>Welcome to your workspace. Start by chatting with <Link href="/yujin" className="font-semibold hover:underline">Yujin(友人)</Link>, a local ollama bot.</p>
    </div>
}
