import Link from "next/link";

export default function CenterNavbar() {
    return (
        <div className="md:flex md:gap-4 lg:gap-8 hidden">
            <Link href={"/komik-terbaru"}>
                <div className="font-bold hover:bg-color-biru hover:text-color-putih p-1 rounded">Komik Terbaru</div>
            </Link>

            <Link href={"/komik-berwarna"}>
                <div className="font-bold hover:bg-color-biru hover:text-color-putih p-1 rounded">Komik Berwarna</div>
            </Link>

            <Link href={"/komik-hot"}>
                <div className="font-bold hover:bg-color-biru hover:text-color-putih p-1 rounded">Komik Hot</div>
            </Link>
        </div>
    )
}