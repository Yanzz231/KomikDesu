import { Palette } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"



export default function KomikGrid({ data, loading, setFirst, setData, type }) {

    const deleteLocalStorage = (mal_id) => {
        const newData = data.data.filter(item => item.mal_id !== mal_id);
        setData({ data: newData })
        localStorage.removeItem(`${type}${mal_id}`)
        setFirst(true)
    }

    return (
        <div className="items-center w-full justify-center bg-color-putih mb-10 shadow-sm">

            <div className="rounded p-5 w-full lg:p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {data.data?.map((data, index) => {
                    return <div key={index} className="flex flex-col">
                        <Link className="relative" href={`/manga/${data.mal_id}`}>
                            <div className="flex items-center">
                                <div className="absolute rounded left-1 top-1 bg-color-accent p-1 text-xs flex items-center gap-1 font-bold z-20"><Palette size={14} />Warna</div>
                                <Image src={"/flag/japan.jpg"} width={35} height={30} className="absolute shadow-md right-1 top-1 text-xs flex items-center gap-1 font-bold z-20" />
                            </div>
                            <Image src={data.images.webp.image_url} alt={"Thumb"} width={390} height={288} className="w-full h-72 object-cover rounded shadow-md" />
                        </Link>

                        <div className="flex flex-col mt-1">
                            <Link href={`/manga/${data.mal_id}`} className="font-bold text-lg px-2">{data.title}</Link>
                            <div className="text-md px-2 justify-between flex">
                                <div>Ch. {data.chapters}</div>
                                <div className="text-color-dark italic">{data.score}</div>
                            </div>
                        </div>
                        {type && <button onClick={() => deleteLocalStorage(data.mal_id)} className="bg-color-abu1 text-center italic text-sm p-1 rounded">X Hapus</button>}
                    </div>
                })}
            </div>
            {loading && <div className="p-5 pb-10 w-full justify-center items-center text-center italic">
                Loading...
            </div>}
        </div>
    )
}