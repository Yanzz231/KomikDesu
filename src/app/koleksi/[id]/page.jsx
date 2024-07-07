import KomikLocalStorage from "@/components/Komik/komikLocalStorage"
import TextLabel from "@/components/Text/textLabel"

export default function page({ params: { id } }) {
    return (
        <div className="flex flex-wrap py-4 gap-4 pb-20 container mx-auto xl:w-1/2 w-full">
            <TextLabel title={`Koleksi ${id.replace("-", " ")}`} />

            <KomikLocalStorage item={`${id.replace("-", " ")}`} />
        </div>
    )
}