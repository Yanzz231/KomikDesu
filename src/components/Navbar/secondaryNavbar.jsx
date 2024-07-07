import Link from "next/link";

export default function SecondaryNavbar() {
    return (
        <div className="bg-color-putih z-10">
            <div className="lg:container mx-auto flex flex-wrap py-3">
                <div className="gap-2 flex px-2 overflow-x-auto mx-auto pb-2">
                    <Link href={"/"} className="text-sm lg:text-base lg:font-medium p-2 rounded cursor-pointer bg-color-biru text-color-putih flex-shrink-0">KomikDesu</Link>
                    <Link href={"/"} className="text-sm lg:text-base lg:font-medium p-2 rounded cursor-pointer  bg-color-background text-color-dark flex-shrink-0">Beranda</Link>
                    <Link href={"/terbaru"} className="text-sm lg:text-base lg:font-medium p-2 rounded cursor-pointer bg-color-background text-color-dark flex-shrink-0">Terbaru</Link>
                    <Link href={"/daftar-komik"} className="text-sm lg:text-base lg:font-medium p-2 rounded cursor-pointer bg-color-background text-color-dark flex-shrink-0">Daftar Komik</Link>
                    <Link href={"/manhwa"} className="text-sm lg:text-base lg:font-medium p-2 rounded cursor-pointer bg-color-background text-color-dark flex-shrink-0">Manhwa</Link>
                    <Link href={"/manhwa"} className="text-sm lg:text-base lg:font-medium p-2 rounded cursor-pointer bg-color-background text-color-dark flex-shrink-0">Manhua</Link>
                    <Link href={"/manga"} className="text-sm lg:text-base lg:font-medium p-2 rounded cursor-pointer bg-color-background text-color-dark flex-shrink-0">Manga</Link>
                </div>
            </div>
        </div>
    )
}