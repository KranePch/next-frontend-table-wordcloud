"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare, TextQuoteIcon} from "lucide-react";

const montserrat = Montserrat({
    weight: "600", 
    subsets:["latin"]
})

const routes = [
    {
        label: "Tabular Data",
        icon: LayoutDashboard,
        href: "/",
        color: "text-sky-500",
    },
    {
        label: "Word Cloud",
        icon: TextQuoteIcon,
        href: "/wordcloud",
        color: "text-green-500",
    }
]

const Sidebar = () => {
    return (
        <div className="space-y-4 flex flex-col h-full
        bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                        fill
                        alt="logo"
                        src="/logo.png"
                        sizes="(max-width: 512px) 100vw, 33vw"
                        />
                    </div>
                    <h1 className={cn("text-xl font-bold", montserrat.className)}>White <span className="text-red-600">Red</span></h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                        href={route.href}
                        key={route.href}
                        className="text-sm group flex p-3 w-full
                        justify-start font-medium cursor-pointer hover:text-white
                        hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;