import KomikInfinite from "@/components/Komik/komikInfinite"
import KomikOption from "@/components/Komik/komikOption"
import TextLabel from "@/components/Text/textLabel"


import { getMangaResponse } from "@/libs/api-manga"

export default async function Page() {

    const getGenre = await getMangaResponse("genres/manga")

    return (
        <div className="flex flex-wrap py-4 gap-4 pb-20 container mx-auto xl:w-1/2 w-full">
            <TextLabel title={"Komik + Update Baru"} />

            {/* PERPUSTAKAAN */}
            <KomikOption title={"Perpustakaan Komik"}
                data={getGenre}
                text2={`*yang perlu diisi cuma satu form, terlalu banyak form yang diisi bisa kosong hasil pencariannya`} />

            <KomikInfinite query={`order_by=start_date`} />
        </div>
    )
}