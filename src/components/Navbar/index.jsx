import Image from "next/image";
import Link from "next/link";

import InputSearch from "./inputSearch";
import FloatNavbar from "./floatNavbar";
import SecondaryNavbar from "./secondaryNavbar";
import CenterNavbar from "./centerNavbar";

export default function Navbar() {
    return (
        <header className="">
            <div className="shadow-2xl  text-color-dark bg-color-putih">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-2">

                    <Link href={"/"} className="flex items-center gap-2 cursor-pointer w-auto h-auto  rounded">
                        <Image src={"/images/favicon.png"} alt={"Logo"} width={48} height={100} style={{ width: "auto", height: "auto" }}  /><span className="font-bold text-md md:text-xl">KomikDesu</span>
                    </Link>

                    <CenterNavbar />

                    <InputSearch />
                </div>

            </div>
            <div className="w-full border-2 border-color-background"></div>


            <SecondaryNavbar />

            <FloatNavbar />
        </header>
    )
}