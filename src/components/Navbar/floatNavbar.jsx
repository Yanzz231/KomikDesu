"use client"
import { List, House, BookOpen, User } from "@phosphor-icons/react";
import Link from "next/link";

export default function FloatNavbar() {
    return (
        <div className="fixed bottom-0 w-full right-0 left-0 shadow-xl p-4 items-center bg-color-putih text-color-dark z-50">
            <ul className="flex items-center justify-center gap-10 md:gap-28">
                <li><Link href={"/"} className="flex justify-center flex-col items-center gap-1"><House size={32} /><span className="text-sm gap-2 md:text-md">Home</span></Link></li>
                <li><Link href={"/bookmark"} className="flex justify-center flex-col items-center gap-1"><BookOpen size={32} /><span className="text-sm gap-2 md:text-md">Bookmark</span></Link></li>
                <li><Link href={"/history"} className="flex justify-center flex-col items-center gap-1"><List size={32} /><span className="text-sm gap-2 md:text-md">History</span></Link></li>
                <li><Link href={"/rak-buku"} className="flex justify-center flex-col items-center gap-1"><User size={32} /><span className="text-sm gap-2 md:text-md">Rak Buku</span></Link></li>
            </ul>
        </div>
    )
}