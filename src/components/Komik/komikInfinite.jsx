"use client"
import { getMangaResponse } from "@/libs/api-manga"

import KomikGrid from "./komikGrid";

import { useEffect, useState } from "react";


export default function KomikInfinite({ query, search }) {

    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(1);
    const [first, setFirst] = useState(true);
    const [loop, setLoop] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            if (first) {
                const newData = await getMangaResponse("manga", `page=${limit}&${query}`)
                setData(newData)
                setFirst(false)
                setLoading(false)
            }

            if (loop) {
                const newData = await getMangaResponse("manga", `page=${limit}&${query}`)
                setData(prevData => ({ data: [...prevData.data, ...newData.data] }));
                setLoop(false)
                setLoading(false)
            }
        };

        fetchData();
        
    }, [limit]);

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2) {
            setLimit(prevPage => prevPage + 1);
            setLoop(true)
            setLoading(true)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return data.data?.length === 0 ? <div className="text-center bg-color-putih justify-center w-full items-center p-4">
                Tidak Ada Hasil Untuk Ditampilkan <span className="font-bold italic">{search}</span>
            </div> : <KomikGrid data={data} loading={loading} />
}