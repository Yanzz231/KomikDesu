"use client"

import { useRouter } from "next/navigation"

export default function KomikOption({ title, data, text1, text2 }) {

    const router = useRouter()

    const handleOption = () => {
        const valueOrder = document.getElementById('orderby').value
        const valueType = document.getElementById('type').value
        const valueGenre = document.getElementById('genre').value
        const valueGenre2 = document.getElementById('genre2').value
        const valueStatus = document.getElementById('status').value

        router.replace(`/?order_by=${valueOrder}&type=${valueType}&genres=${valueGenre}${valueGenre2 !== "" ? `,${valueGenre2}` : ""}&status=${valueStatus}`)
    }

    return (
        <div className="shadow-md bg-color-putih my-4 w-full px-5 py-4 mx-2 lg:mx-0 rounded">
            <h3 className="lg:text-start text-center font-medium text-md">{title}</h3>
            <p className="text-sm lg:text-end py-2 text-color-abu">{text1}</p>
            <div className="grid grid-cols-3 lg:grid-cols-6 py-2 gap-2 text-sm">

                <select id="orderby" name="orderby" aria-label="Order By" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
                    <option value="start_date">Update</option>
                    <option value="rank">Peringkat</option>
                </select>


                <select id="type" name="type" aria-label="Type" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
                    <option value="manga">Tipe</option>
                    <option value="manga">Manga</option>
                    <option value="manhwa">Manhwa</option>
                    <option value="manhua">Manhua</option>
                </select>

                <select id="genre" name="genre" aria-label="Genre" className="text-sm w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
                    <option value="">Genre</option>
                    {data.data.map((data, index) => {
                        return <option className="" key={index} value={`${data.mal_id}`}>{data.name}</option>
                    })}
                </select>

                <select id="genre2" name="genre2" aria-label="Genre 2" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
                    <option value="">Genre 2</option>
                    {data.data.map((data, index) => {
                        return <option key={index} value={`${data.mal_id}`}>{data.name}</option>
                    })}
                </select>

                <select id="status" name="status" aria-label="Status" className="w-full p-2 border border-color-abu1 bg-color-background text-color-dark">
                    <option value="">Status</option>
                    <option value="upcoming">Ongoing</option>
                    <option value="complete">Tamat</option>
                </select>



                <button onClick={handleOption} className="bg-color-biru text-color-putih font-medium">Cari</button>

            </div>

            <p className="text-sm lg:text-end py-1 text-color-abu">{text2}</p>

        </div>
    )
}