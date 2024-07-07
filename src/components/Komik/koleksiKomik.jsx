"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { textPopUp } from '@/libs/swal';


export default function KoleksiKomik() {
    const [koleksi, setKoleksi] = useState([]);

    useEffect(() => {
        const storedKoleksi = localStorage.getItem("koleksi") ? JSON.parse(localStorage.getItem("koleksi")) : []
        setKoleksi(storedKoleksi);
    }, []);

    const deleteLocalStorage = (nama) => {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).startsWith(`${nama}_`)) {
                localStorage.removeItem(localStorage.key(i))
            }
        }
        let get = koleksi.filter(i => i !== nama)
        localStorage.setItem("koleksi", get)
        setKoleksi(get)
        textPopUp(`Success!`, `Menghapus Data Koleksi ${nama}`, `success`)
    }

    return koleksi.length !== 0 && (<div className="bg-color-putih mt-10 w-full p-4">
        <h3 className="font-bold text-center mb-2">Koleksi Buatan Kamu</h3>
        <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-2'>
            {koleksi.map((data, index) => (
                <div key={index} className="bg-color-abu1 w-full flex flex-col gap-2 rounded">
                    <div className='justify-between flex flex-wrap'>
                        <h3 className="text-color-abu font-bold text-sm px-4 pt-4">{data}</h3>
                        <button onClick={() => deleteLocalStorage(data)} className="text-color-abu px-4 pt-4 italic text-sm">x hapus</button>
                    </div>
                    <Link href={`/koleksi/${data.replace(" ", "-")}`} className="bg-color-biru w-full text-end justify-start text-color-putih p-1 font-bold">
                        {`Lihat ->`}
                    </Link>
                </div>
            ))}
        </div>
    </div>)

}
