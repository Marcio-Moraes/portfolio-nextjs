'use client'; 

import Link from "next/link"
import { useState } from "react"
import { MenuDropDownTopo } from "./menuTopoDrop";
import { ThemeToggole } from "@/components/theme-toggle";
import { motion } from "motion/react";
import { rolarPara } from "@/app/helpers/rolarPara";



export const Header = () => {
    return(
        <div className="bg-[#121212] fixed top-0 left-0 right-0 z-50">
            <div className="w-full max-w-7xl m-auto   flex justify-between items-center px-6 py-4">
                <div className="text-6xl font-black text-white hover:text-amber-400">
                    <Link href={'/'}>M</Link>
                </div>
            
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    <div className="hidden md:flex gap-1">
                        <a 
                            className="rounded cursor-pointer text-white hover:text-black hover:bg-amber-400 px-4 py-1"
                            onClick={() => rolarPara('home')}
                            rel="noopener noreferrer"
                        >
                            Home
                        </a>
                        <a 
                            className="rounded cursor-pointer text-white hover:text-black hover:bg-amber-400 px-4 py-1"
                            onClick={() => rolarPara('sobre')}
                            rel="noopener noreferrer"
                        >
                            Sobre
                        </a>
                        <a 
                            className="rounded cursor-pointer text-white hover:text-black hover:bg-amber-400 px-4 py-1"
                            onClick={() => rolarPara('projetos')}
                            rel="noopener noreferrer"
                        >
                            Projetos
                        </a>
                        <a 
                            className="rounded cursor-pointer text-white hover:text-black hover:bg-amber-400 px-4 py-1"
                            onClick={() => rolarPara('cursos')}
                            rel="noopener noreferrer"
                        >
                            Cursos
                        </a>
                        <a 
                            className="rounded cursor-pointer text-white hover:text-black hover:bg-amber-400 px-4 py-1"
                            onClick={() => rolarPara('contato')}
                            rel="noopener noreferrer"
                        >
                            Contato
                        </a>
                    </div>
                </motion.div>

                <div className="flex gap-6">
                    <MenuDropDownTopo />

                    <ThemeToggole />
                </div>
            </div>
        </div>
    )
    
}