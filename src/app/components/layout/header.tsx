'use client'; 
 
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link"
import { useState } from "react"
import { MenuDropDownTopo } from "./menuTopoDrop";
import { ThemeToggole } from "@/components/theme-toggle";
import { motion } from "motion/react";



export const Header = () => {
    // const [menuOpen, setMenuOpen] = useState(false);    

    // const abrirMenu = () => {
    //     setMenuOpen(!menuOpen);
    // }

    

  const rolarPara = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento?.addEventListener('click', (e) => {
            e.preventDefault();
        });
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };


    return(
        <div className="w-full max-w-7xl m-auto flex justify-between items-center px-6 py-4">
            <div className="text-6xl font-black hover:text-amber-400">
                <Link href={'/'}>M</Link>
            </div>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <div className="hidden md:flex gap-1">
                    <Link 
                        href={"/"} 
                        className="rounded hover:text-black hover:bg-amber-400 px-4 py-1"
                    >
                        Home
                    </Link>
                    <Link 
                        href={""} 
                        className="rounded hover:text-black hover:bg-amber-400 px-4 py-1"
                        onClick={() => rolarPara('sobre')}
                    >
                        Sobre
                    </Link>
                    <Link 
                        href={""} 
                        className="rounded hover:text-black hover:bg-amber-400 px-4 py-1"
                        onClick={() => rolarPara('projetos')}
                    >
                        Projetos
                    </Link>
                    <Link 
                        href={""} 
                        className="rounded hover:text-black hover:bg-amber-400 px-4 py-1"
                        onClick={() => rolarPara('cursos')}
                    >
                        Cursos
                    </Link>
                    <Link 
                        href={""} 
                        className="rounded hover:text-black hover:bg-amber-400 px-4 py-1"
                        onClick={() => rolarPara('contato')}
                    >
                        Contato
                    </Link>
                </div>
            </motion.div>

            <div className="flex gap-6">
                <MenuDropDownTopo />

                <ThemeToggole />
            </div>
            

            {/* {menuOpen && 
                <div className={`bg-amber-400 w-38 h-screen flex flex-col justify-center items-center p-5 gap-2.5 text-black font-bold uppercase fixed top-0 right-0`}>
                    <Link href={"/"} className="hover:text-white">Home</Link>
                    <Link href={"/sobre"} className="hover:text-white">Sobre</Link>
                    <Link href={"/projetos"} className="hover:text-white">Projetos</Link>
                    <Link href={"/contato"} className="hover:text-white">Contato</Link>
                </div>
            } */}
        </div>
    )
    
}