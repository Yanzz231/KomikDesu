import Link from "next/link"

export default function Rakbuku() {
    return (
        <div className="bg-color-putih w-full p-5 rounded">

            <div className="bg-color-abu1 w-full flex flex-col gap-2 rounded">
                <h3 className="text-color-biru font-bold text-md px-4 pt-4">History</h3>
                <h3 className="text-sm px-4">Komik terakhir yang pernah kamu baca di Komikdesu.</h3>
                <Link href={"/history"} className="bg-color-biru w-full text-end text-color-putih p-1 font-bold">
                    {`Lihat History Kamu ->`}
                </Link>
            </div>

            <div className="grid grid-cols-2 mt-6 gap-4 w-full">

                <div className="bg-color-abu1 w-full flex flex-col gap-2 rounded justify-between">
                    <h3 className="text-color-biru font-bold text-md px-4 pt-4">Bookmark</h3>
                    <h3 className="text-sm px-4">Komik yang kamu bookmark di Komikdesu.</h3>
                    <Link href={"/bookmark"} className="bg-color-biru w-full text-end text-color-putih p-1 font-bold">
                        {`Lihat ->`}
                    </Link>
                </div>

                <div className="bg-color-abu1 w-full flex flex-col gap-2 rounded justify-between">
                    <h3 className="text-color-biru font-bold text-md px-4 pt-4">Baca Nanti</h3>
                    <h3 className="text-sm px-4">Koleksi komik yang kamu tandai untuk dibaca nanti.</h3>
                    <Link href={"/baca-nanti"} className="bg-color-biru w-full text-end text-color-putih p-1 font-bold">
                        {`Lihat ->`}
                    </Link>
                </div>

            </div>

        </div>
    )
}