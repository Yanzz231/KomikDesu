"use client"
import { useState } from "react"

import Chapter from "./chapter"
import KomikGrid from "./komikGrid"

export default function KomikSwitch({ data, same }) {
    const [change, setChange] = useState("chapter")
    return (
        <>
            <div className="bg-color-putih flex mx-2 lg:mx-0 my-5 text-md">
                <button onClick={() => setChange("chapter")} className={`${change === "chapter" ? "bg-color-biru text-color-putih" : "bg-color-putih"} p-2 w-1/3 text-center font-medium`}>Chapter</button>
                <button onClick={() => setChange("sinopsis")} className={`${change === "sinopsis" ? "bg-color-biru text-color-putih" : "bg-color-putih"} p-2 w-1/3 text-center text-color-dark font-medium`}>Sinopsis</button>
                <button onClick={() => setChange("mirip")} className={`${change === "mirip" ? "bg-color-biru text-color-putih" : "bg-color-putih"} p-2 w-1/3 text-center text-color-dark font-medium`}>Mirip</button>
            </div>

            {change === "chapter" && (
                <>
                    {/* UP TO DATE */}
                    <div className="bg-color-putih p-3 mx-2 lg:mx-0">
                        <h3 className="text-sm text-color-abu">Up To Date soal Manga, Manhua, dan Manhwa gabung ke komunitas Komiku:</h3>
                        <div className="flex gap-3 pt-2">
                            <h3 className="text-md text-color-biru font-medium">Facebook</h3>
                            <h3 className="text-md text-color-biru font-medium">Instagram</h3>
                        </div>
                    </div>


                    {/* CHAPTER */}
                    <Chapter data={data} />
                </>
            )}

            {change === "sinopsis" && (
                <>
                    <div className="bg-color-putih p-4 mx-2 lg:mx-0">
                        <h3 className="text-md font-bold text-color-abu">Ringkasan</h3>
                        <h3 className="text-sm text-color-abu text-justify">{data.data?.background}</h3>

                        <h3 className="text-md font-bold text-color-abu mt-5">Sinopsis Lengkap</h3>
                        <h3 className="text-sm text-color-abu text-justify">{data.data?.synopsis}</h3>
                    </div>
                </>
            )}

            {change === "mirip" && (
                <>
                    {/* SAME KOMIK */}
                    <div className="bg-color-putih p-3 mx-2 lg:mx-0">
                        <KomikGrid data={same} />
                    </div>
                </>
            )}
        </>
    )
}