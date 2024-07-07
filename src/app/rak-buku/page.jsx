import KoleksiKomik from "@/components/Komik/koleksiKomik"
import Rakbuku from "@/components/Komik/rakBuku"
import TextLabel from "@/components/Text/textLabel"

export default function page() {
    return (
        <div className="flex flex-wrap py-4 gap-4 pb-20 container mx-auto xl:w-1/2 w-full">
            <TextLabel title={"Rak Buku Kamu"} />

            <Rakbuku />
            <KoleksiKomik />
        </div>
    )
}