"use client"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

import { textPopUp } from "@/libs/swal"

export default function Chapter({ data }) {

    const searchRef = useRef()
    const [inputData, setInputData] = useState("")


    const [search, setSearch] = useState("")

    const [first, setFirst] = useState(true)
    const [bookmarkData, setBookmarkData] = useState([])
    const [bacanantiData, setBacanantiData] = useState([])

    const [koleksiLocal, setKoleksiLocal] = useState([])
    const [koleksiInput, setKoleksiInput] = useState(false)

    const [koleksi, setKoleksi] = useState([])


    const dataChapter = [
        {
            chapter: "Chapter 1",
            views: 200,
            date: "1/02/2024"
        },
        {
            chapter: "Chapter 2",
            views: 200,
            date: "1/02/2024"
        }
    ]

    // CHECKING DATA
    useEffect(() => {

        if (!first) return
        const checkBookmark = localStorage.getItem(`bookmark_${data.data.mal_id}`) ? JSON.parse(localStorage.getItem(`bookmark_${data.data.mal_id}`)) : [];
        const checkBacananti = localStorage.getItem(`baca-nanti_${data.data.mal_id}`) ? JSON.parse(localStorage.getItem(`baca-nanti_${data.data.mal_id}`)) : [];
        const checkKoleksi = localStorage.getItem(`koleksi`) ? JSON.parse(localStorage.getItem(`koleksi`)) : [];

        setBookmarkData(checkBookmark.filter(get => get.mal_id === data.data.mal_id))
        setBacanantiData(checkBacananti.filter(get => get.mal_id === data.data.mal_id))
        setKoleksiLocal(checkKoleksi)

        const fetchData = async () => {
            let arrayData = []
            for (let i = 0; i < localStorage.length; i++) {
                for (let a = 0; a < checkKoleksi.length; a++) {
                    if (localStorage.key(i).startsWith(`${checkKoleksi[a]}`)) {
                        const item = localStorage.getItem(localStorage.key(i)) ? JSON.parse(localStorage.getItem(localStorage.key(i))) : []
                        if (item.length) {
                            if (item[0].mal_id === data.data.mal_id) {
                                arrayData.push(localStorage.key(i).split("_")[0])
                                setKoleksi(arrayData)
                            }
                        }
                    }
                }
            }
        }

        fetchData()

        setFirst(false)

    }, []);

    // FILTER CHAPTER
    const filterSearchChapter = dataChapter.filter(data => data.chapter.toLowerCase().includes(search.toLowerCase()))

    // SAVE AND DELETE LOCAL STORAGE
    const handleLocalStorage = (item, updateState, type, isDelete = false, isKoleksi = false) => {
        if (isDelete && !isKoleksi) {
            localStorage.removeItem(item);
            updateState([]);
            textPopUp(`Success!`, `Menghapus Data di ${type}`, `error`)
            return;
        }

        if (isKoleksi && isDelete) {
            localStorage.removeItem(item);
            let get = koleksi.filter(i => i !== item.split("_")[0])
            updateState(get);
            textPopUp(`Success!`, `Menghapus Data di ${type}`, `error`)
            return;
        }


        if (item.length > 20) textPopUp(`Success!`, `Earor`, `error`)

        const storedData = localStorage.getItem(item);
        let localArray = storedData ? JSON.parse(storedData) : [];
        if (localArray.some(entry => entry.mal_id === data.data.mal_id)) return;

        localArray.push({ name: data.data.title, mal_id: data.data.mal_id });
        localStorage.setItem(item, JSON.stringify(localArray));

        let koleksiArray = koleksi
        koleksiArray.push(item.split("_")[0])

        if (koleksi) updateState([...koleksi, ...item.split("_")[0]]);
        else updateState([{ name: data.data.title, mal_id: data.data.mal_id }]);

        textPopUp(`Success!`, `Menambah Data Kedalam ${type}`, `success`)
    };

    // SAVE KOLEKSI
    const saveKoleksiStorage = (item, name) => {
        let koleksiLocal = localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : [];
        if (!koleksiLocal.includes(name)) {
            koleksiLocal.push(name);
            localStorage.setItem(item, JSON.stringify(koleksiLocal));
            setKoleksiLocal(koleksiLocal);
        }
    };

    // COMBO FUNCTION
    const handleClick = (item) => {
        if (searchRef.current.value.length > 15) return textPopUp(`Error!`, `Judul Koleksi Terlalu Panjang`, `error`)
        if (koleksiLocal.length > 7) return textPopUp(`Error!`, `Maximal Data Koleksi hanya 8`, `error`)
        if(koleksiLocal.includes(searchRef.current.value.toLowerCase())) return textPopUp(`Error!`, `Ada Judul yang sama dengan Koleksi mu`, `error`)

        saveKoleksiStorage(item, searchRef.current.value)
        handleLocalStorage(`${searchRef.current.value}_${data.data.mal_id}`, setKoleksi, "Koleksi", false, true)
        setKoleksiInput(!koleksiInput)
        setInputData("")
    }

    // ONCHANGE INPUT
    const handleInput = (event) => {
        setInputData(event.target.value)
    }

    return (
        <div className="bg-color-putih p-3 mx-2 lg:mx-0 my-1">
            <div className="flex flex-wrap gap-4 w-3/5 md:w-full">
                {bookmarkData.length === 0 ?
                    <button onClick={() => handleLocalStorage(`bookmark_${data.data.mal_id}`, setBookmarkData, "Bookmark")} className="border-color-biru border p-2 text-sm rounded text-color-biru">Bookmark</button>
                    : <button onClick={() => handleLocalStorage(`bookmark_${data.data.mal_id}`, setBookmarkData, "Bookmark", true)} className="border-color-abu border p-2 text-sm rounded text-color-abu">X Batal Bookmark</button>}
                {bacanantiData.length === 0 ?
                    <button onClick={() => handleLocalStorage(`baca-nanti_${data.data.mal_id}`, setBacanantiData, "Baca Nanti")} className="border-color-biru border p-2 text-sm rounded text-color-biru">Baca Nanti</button>
                    : <button onClick={() => handleLocalStorage(`baca-nanti_${data.data.mal_id}`, setBacanantiData, "Baca Nanti", true)} className="border-color-abu border p-2 text-sm rounded text-color-abu">X Baca Nanti</button>}
                <div className="flex flex-col relative">
                    <button onClick={() => setKoleksiInput(!koleksiInput)} className="border-color-biru border p-2 text-sm rounded text-color-putih bg-color-biru">{!koleksiInput ? "+ Koleksi Baru" : "X Tutup"}</button>

                    <div className={`${!koleksiInput && "hidden"} absolute mt-12 bg-color-abu1 py-1 px-2 flex gap-2 rounded`}>
                        <input ref={searchRef} value={inputData} onChange={handleInput} placeholder="ex: Action Favorit" className="border-color-biru border text-xs rounded text-color-black px-1" />
                        <button onClick={() => handleClick("koleksi")} className="bg-color-biru text-color-putih p-1 text-xs rounded">+Add</button>
                    </div>
                </div>
                {koleksiLocal.map((res, index) => (
                    <div key={index}>
                        <button onClick={() => koleksi.includes(res) ? handleLocalStorage(`${res}_${data.data.mal_id}`, setKoleksi, `Koleksi ${res}`, true, true) : handleLocalStorage(`${res}_${data.data.mal_id}`, setKoleksi, "Koleksi", false, true)} className={koleksi.includes(res) ? "border-color-abu border p-2 text-sm rounded text-color-abu" : "border-color-biru border p-2 text-sm rounded text-color-biru"}>{koleksi.includes(res) ? "x" : ""} {res}</button>
                    </div>
                ))}
            </div>
            <h3 className="text-xl text-color-abu my-4 font-medium">Daftar Chapter</h3>
            <p className="text-sm text-justify">Berikut daftar chapter dari Komik Kuroshitsuji bahasa Indonesia terlengkap. Untuk membaca chapter dari Manga Kuroshitsuji Sub Indo, cukup klik daftar chapter dibawah ini.</p>

            <div className="flex mt-2 gap-2">
                <div className="w-1/2 text-sm font-medium bg-color-background p-1 text-center">Nomor Chapter</div>
                <div className="w-1/4 text-sm font-medium bg-color-background p-1 text-center">View</div>
                <div className="w-1/4 text-sm font-medium bg-color-background p-1 text-center">Tanggal</div>
            </div>

            {/* SEARCH */}
            <div className="mb-4 w-full mt-3">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Cari Nomor Chapter..."
                    className="w-full text-sm border-color-abu border p-1 rounded-md"
                />
            </div>

            <table className="w-full text-sm text-color-abu border-separate me-10 mt-2">
                <tbody>
                    {filterSearchChapter.map((data, index) => (
                        <tr key={index}>
                            <td className="w-1/2 text-md p-1 border-b-4 border-color-background">
                                <Link href={`/chapter/`}>{data.chapter}</Link>
                            </td>
                            <td className="w-1/4 text-md p-1 border-b-4 border-color-background">{data.views}</td>
                            <td className="w-1/4 text-md p-1 border-b-4 border-color-background">{data.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
