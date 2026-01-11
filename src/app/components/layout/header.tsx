'use client'; 
 
import Link from "next/link"
import { useState } from "react"



export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const abrirMenu = () => {
        setMenuOpen(!menuOpen);
    }


    return(
        <div className="w-full max-w-7xl m-auto flex justify-between items-center px-6 py-4">
            <div className="text-6xl font-black hover:text-amber-400">
                <Link href={'/'}>M</Link>
            </div>

            <div className="flex gap-1">
                <Link href={"/"} className="hover:text-black hover:bg-amber-400 px-4 py-1">Home</Link>
                <Link href={"/sobre"} className="hover:text-black hover:bg-amber-400 px-4 py-1">Sobre</Link>
                <Link href={"/projetos"} className="hover:text-black hover:bg-amber-400 px-4 py-1">Projetos</Link>
                <Link href={"/contato"} className="hover:text-black hover:bg-amber-400 px-4 py-1">Contato</Link>
            </div>

            <div className="flex flex-col bg-amber-50 z-9999999999 p-1.5 gap-2 cursor-pointer hover:opacity-75" onClick={abrirMenu}>
                <div className="w-7 h-0.5 bg-amber-400"></div>
                <div className="w-7 h-0.5 bg-amber-400"></div>
                <div className="w-4 h-0.5 bg-amber-400"></div>
            </div>
            {menuOpen && 
                <div className={`bg-amber-400 w-38 h-screen flex flex-col justify-center items-center p-5 gap-2.5 text-black font-bold uppercase fixed top-0 right-0`}>
                    <Link href={"/"} className="hover:text-white">Home</Link>
                    <Link href={"/sobre"} className="hover:text-white">Sobre</Link>
                    <Link href={"/projetos"} className="hover:text-white">Projetos</Link>
                    <Link href={"/contato"} className="hover:text-white">Contato</Link>
                </div>
            }
        </div>
    )
    
}