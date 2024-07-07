import { getMangaResponse } from "@/libs/api-manga"

import TextLabel from "../Text/textLabel"
import KomikInfinite from "./komikInfinite"

export default async function KomikSearch({ search }) {

    return (
        <div className="flex flex-wrap py-4 gap-4 pb-20 container mx-auto xl:w-1/2 w-full">

            <TextLabel title={`${search.q ? `Hasil Pencarian ${search.q}` : `Komik ${search.type ? `+ ${search.type}` : ""}${search.status ? `+ ${search.status}` : ""}`}`} />

            <KomikInfinite search={search.q ? search.q : ""} query={`q=${search.q ? search.q : ""}&order_by=${search.order_by ? search.order_by : ""}&type=${search.type ? search.type : ""}&genres=${search.genres ? search.genres : ""}&status=${search.status ? search.status : ""}`} />
        </div>
    )
}