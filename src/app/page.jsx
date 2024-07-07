import { getMangaResponse } from "@/libs/api-manga";

import KomikList from "@/components/Komik/komikList";
import KomikPack from "@/components/Komik/KomikPack";
import KomikBox from "@/components/Komik/KomikBox";
import KomikSearch from "@/components/Komik/komikSearch";
import KomikOption from "@/components/Komik/komikOption";

export default async function Home({ searchParams }) {

  const isSearchParamsEmpty = Object.keys(searchParams).length === 0;
  if (!isSearchParamsEmpty) return <KomikSearch search={searchParams} />;

  const getManga = await getMangaResponse("manga", "limit=15")
  const getGenre = await getMangaResponse("genres/manga")

  return (
    <div className="flex flex-wrap py-4 pb-16 z-50 lg:container lg:mx-auto xl:w-1/2 w-full">

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
      <KomikOption title={"Perpustakaan Komik"}
        data={getGenre}
        text1={`Jelajahi 5371 judul komik dan 268648 jumlah chapter yang tersedia di Komiku`}
        text2={`*yang perlu diisi cuma satu form, terlalu banyak form yang diisi bisa kosong hasil pencariannya`} />



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
