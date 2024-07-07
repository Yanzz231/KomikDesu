import Image from "next/image"
import Link from "next/link"

export default function KomikBox({ data }) {
    return (
        <div key={data.mal_id} className="flex flex-row gap-4 bg-color-putih rounded shadow-md">

            <Link href={`/manga/${data.mal_id}`}>
                <Image src={data.images.webp.image_url} alt={"Thumb"} width={160} height={128} className="h-32 w-40 object-cover" />
            </Link> 

            <div className="flex flex-col pt-2 gap-1 items-start">
                <Link href={`/manga/${data.mal_id}`}>{data.title.length > 14 ? data.title.slice(0, 14) + ".." : data.title}</Link>
                <h3 className="text-xs">Manga Fantasy 23 Menit Lalu</h3>
                <div className="bg-color-biru text-color-putih p-1 rounded w-28 text-center mt-8 text-sm"> Chapter {data.chapters === null ? "1" : data.chapters}</div>
            </div>

        </div>
    )
} 