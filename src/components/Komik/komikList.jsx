import Image from "next/image"
import Link from "next/link"

export default function KomikList({ data }) {

    return (
        <div key={data.mal_id} className="flex flex-col pt-2 gap-2 w-36 xl:w-52 flex-shrink-0">
            <Link href={`/manga/${data.mal_id}`}>
                <Image src={data.images.webp.image_url} alt={"Thumb"} width={240} height={287} className="xl:w-52 h-40 w-36 xl:h-72 object-cover rounded shadow-md" />
            </Link>

            <div className="flex flex-col gap-1">
                <Link href={`/manga/${data.mal_id}`} className="text-md">{data.title.length > 14 ? data.title.slice(0, 14) + ".." : data.title}</Link>
                <h3 className="text-sm">{data.genres[0].name}</h3>
            </div>

            <div className="w-full bg-color-biru text-color-primary text-center p-2">
                Chapter {data.chapters === null ? "1" : data.chapters}
            </div>
        </div>
    )
}