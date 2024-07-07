import { getMangaResponse } from "@/libs/api-manga";


import KomikList from "@/components/Komik/komikList";
import KomikPack from "@/components/Komik/KomikPack";
import KomikBox from "@/components/Komik/KomikBox";


export default async function Home() {

  const getManga = await getMangaResponse("manga", "limit=15")

  return (
    <div className="flex flex-wrap py-4 pb-16 z-50 container mx-auto xl:w-1/2 w-full">

      {/* BACA KOMIK */}
      <div className="shadow-md bg-color-putih my-4 w-full px-5 py-4">
        <h3 className="text-xl font-bold">Komikdesu - Baca Komik</h3>
        <div className="w-full border border-color-biru"></div>
        <p className="text-xs pt-2 text-justify">Selamat datang di website Komiku, situs baca komik, baca manga, baca manhua, dan baca manhwa terpopuler di Indonesia. Tanpa iklan yang mengganggu dan hanya di Komiku kamu cukup scrolling untuk melihat chapter berikutnya, mudah dan tidak ribet.</p>
        <h3 className="text-md md:text-xl font-bold text-color-abu pt-2">Baca Manga Terpopuler Minggu Ini</h3>

        <div className="overflow-x-auto">
          <div className="flex gap-2 pb-2">
              {getManga.data.map((data, index) => {
                return <KomikList data={data} key={index} />
              })}
          </div>
        </div>

      </div>

      {/* PERPUSTAKAAN */}
      <div className="shadow-md bg-color-putih my-4 w-full px-5 py-4 mx-2 lg:mx-0 rounded">
        <h3 className="lg:text-start text-center font-medium text-md">Perpustakaan Komik</h3>
        <p className="text-sm lg:text-end py-2 text-color-abu">Jelajahi 5371 judul komik dan 268648 jumlah chapter yang tersedia di Komiku</p>
        <div className="grid grid-cols-3 lg:grid-cols-6 py-2 gap-2">

          <select name="orderby" aria-label="Order By" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
            <option className="" value="">Acak</option>
            <option className="" value="">Acak</option>
          </select>

          <select name="orderby" aria-label="Order By" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
            <option className="" value="">Acak</option>
          </select>

          <select name="orderby" aria-label="Order By" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
            <option className="" value="">Acak</option>
          </select>

          <select name="orderby" aria-label="Order By" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
            <option className="" value="">Acak</option>
          </select>

          <select name="orderby" aria-label="Order By" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
            <option className="" value="">Acak</option>
          </select>

          <button className="bg-color-biru text-color-putih font-medium">Cari</button>

        </div>

        <p className="text-sm lg:text-end py-1 text-color-abu">*yang perlu diisi cuma satu form, terlalu banyak form yang diisi bisa kosong hasil pencariannya</p>

      </div>


      <KomikPack title={"Manga Terpopuler"} api={getManga} type={[
        { name: "Manga Terpopuler", url: "/manga-terpopuler" },
        { name: "Manga Baru", url: "/manga-baru" },
        { name: "Daftar Manga", url: "/daftar-manga" }]} />

      {/* RILISAN KOMIK TERBARU */}
      <div className="my-4 w-full py-4 ">
        <h3 className="text-center font-medium text-md lg:text-xl">Rilisan Komik <span className="bg-color-biru text-color-putih p-1 rounded">Terbaru</span></h3>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-4 mx-2">

          {getManga.data.map((data, index) => {
            return <KomikBox data={data} key={index} />
          })}

        </div>

      </div>

    </div >
  );
}
