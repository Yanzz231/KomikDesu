"use client"

import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

export default function InputSearch() {

    const [search, setSearch] = useState("")

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            if (!searchRef.current.value.trim()) return
            setSearch("")
            router.replace(`/?q=${searchRef.current.value}`)
        }
    }

    return (
        <div className="flex gap-2">
            <input ref={searchRef} value={search} onChange={handleInput} onKeyDown={handleSearch} placeholder="Search.." className="py-1  pl-2 bg-color-background w-40"></input>
            <button onClick={handleSearch} className="bg-color-biru text-color-putih py-1 px-2 rounded font-medium">Cari</button>
        </div>
    )
}