"use client"
import { getMangaResponse } from "@/libs/api-manga"

import KomikGrid from "./komikGrid";

import { useEffect, useState } from "react";


export default function KomikLocalStorage({ item }) {

    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(1);
    const [first, setFirst] = useState(true);
    const [loop, setLoop] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            if (!first) return
            let array = []
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).startsWith(item)) {
                    const item = localStorage.getItem(localStorage.key(i))
                    if (item) {
                        const parsedItem = JSON.parse(item);
                        const getManga = await getMangaResponse(`manga/${parsedItem[0].mal_id}`)
                        array.push(getManga.data)
                        if (Array.isArray(parsedItem)) {
                            setData({ data: array })
                            setLoading(false)
                        }
                    } else {
                        setLoading(false)
                    }
                }
            }
        };

        fetchData();
    }, [limit]);

    // const handleScroll = async () => {
    //     if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    //     setLimit(prevPage => prevPage + 1);
    //     setLoop(true)
    //     setLoading(true)
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return data.length === 0 ? <div className="text-center bg-color-putih justify-center w-full items-center p-4">
        Tidak Ada Hasil Untuk Ditampilkan
    </div> : <KomikGrid data={data} loading={loading} setFirst={setFirst} setData={setData} type={item} />
}