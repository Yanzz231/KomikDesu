import Chapter from "@/components/Komik/chapter"
import KomikSwitch from "@/components/Komik/komikSwitch"
import { getMangaResponse } from "@/libs/api-manga"

import Image from "next/image"
import Link from "next/link"

export default async function Page({ params }) {

    const getManga = await getMangaResponse(`manga/${params.id}`)
    const getSame = await getMangaResponse(`manga`, `genres=${getManga.data?.genres.length > 0 ? getManga.data?.genres[0].mal_id : []}&limit=10`)

    return (
        <div className="container mx-auto flex py-4 mb-20 xl:w-1/2 w-full">
            <div className="w-full flex flex-col">

                {/* IMAGE */}
                <Image src={getManga.data?.images.webp.image_url} alt={"Thumb"} width={500} height={200} className="object-cover h-[250px] lg:h-[400px] w-full" />

                {/* JUDUL, SINOPSIS, CHAPTER */}
                <div className="w-full bg-color-putih shadow-sm p-4">
                    <h3 className="text-2xl mx-4 mt-4 font-medium lg:text-color-biru">{getManga.data?.title}</h3>
                    <h3 className="text-md mx-4 mt-4 font-medium">Sinopsis</h3>
                    <p className="text-sm mx-4 mt-2">{getManga.data?.synopsis}</p>

                    <div className="flex justify-start mx-4 mt-2 gap-4">
                        <div className="bg-color-background p-2 text-sm">Awal: <span className="font-bold text-md">Chapter 1</span></div>
                        <div className="bg-color-background p-2 text-sm">Terbaru: <span className="font-bold text-md">Chapter 100</span></div>
                    </div>
                </div>

                {/* DATA */}
                <div className=" bg-color-putih flex flex-col lg:flex-row gap-4 p-3 items-start mx-2 lg:mx-0 lg:mt-4 mt-4">
                    <div className="border-color-background border-2 lg:border-0 rounded p-1 mx-auto">
                        <Image src={getManga.data?.images.webp.image_url} alt={"Thumb"} width={224} height={299} className="h-80 w-56 object-cover mx-auto lg:mx-0" />
                    </div>

                    <table className="w-full text-sm text-color-abu border-separate border-spacing-1 me-10">
                        <tbody>
                            <tr>
                                <td className="p-2 bg-color-abu1 rounded text-start w-1/3">Judul Komik</td>
                                <td className="p-2 w-2/3 text-start bg-color-putih border-color-abu1 border-2 rounded">{getManga.data?.title}</td>
                            </tr>

                            <tr>
                                <td className="p-2 bg-color-abu1 rounded text-start w-1/3">Jenis Komik</td>
                                <td className="p-2 w-2/3 text-start bg-color-putih border-color-abu1 border-2 rounded">{getManga.data?.type}</td>
                            </tr>

                            <tr>
                                <td className="p-2 bg-color-abu1 rounded text-start w-1/3">Author</td>
                                <td className="p-2 w-2/3 text-start bg-color-putih border-color-abu1 border-2 rounded">{getManga.data?.authors.map((data, index) => {
                                    return (
                                        <span key={index}>{data.name} </span>
                                    )
                                })}</td>
                            </tr>

                            <tr>
                                <td className="p-2 bg-color-abu1 rounded text-start w-1/3">Status</td>
                                <td className="p-2 w-2/3 text-start bg-color-putih border-color-abu1 border rounded">{getManga.data?.status}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                {/* GENRE */}
                <div className="flex flex-wrap bg-color-putih gap-2 p-3 mx-2 lg:mx-0">
                    {getManga.data?.genres.map((data, index) => {
                        return (
                            <Link key={index} href={`/genre/${data.url}`} className="bg-color-background p-3 font-medium rounded text-sm lg:text-md text-color-abu">{data.name}</Link>
                        )
                    })}
                </div>


                <KomikSwitch data={getManga} same={getSame} />

            </div>

        </div>
    )
}