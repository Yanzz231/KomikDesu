import KomikList from "./komikList"

import Link from "next/link"

export default async function  KomikPack({ title, api, type }) {
    return (
        <section className="shadow-md bg-color-putih my-4 w-full px-5 py-4 ">
            <h3 className="text-start font-medium text-md">{title}</h3>

            <div className="overflow-x-auto">
                <div className="flex gap-2 w-60 pb-2">
                    {api.data.map((data, index) => {
                        return <KomikList data={data} key={index} />
                    })}
                </div> 
            </div>

            <div className="text-center gap-2 flex justify-center pt-8">
                <Link href={type[0].url} className="bg-color-biru text-color-putih rounded-md p-1 text-sm">{type[0].name}</Link>
                <Link href={type[1].url} className="bg-color-biru text-color-putih rounded-md p-1 text-sm">{type[1].name}</Link>
                <Link href={type[2].url} className="bg-color-biru text-color-putih rounded-md p-1 text-sm">{type[2].name}</Link>
            </div>
        </section>
    )
}