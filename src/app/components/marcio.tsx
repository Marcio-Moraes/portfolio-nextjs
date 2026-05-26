"use client"

import { Titulo } from "./layout/titulo"
import { ListaIcones } from "./listaIcones"
import { motion } from "motion/react"
import { FaGithub } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"
import { IoMdMail } from "react-icons/io"
import { ImWhatsapp } from "react-icons/im"

export const Marcio = () => {
    return(
        <div className="h-screen flex flex-col items-center justify-center" id="home">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Titulo title1="MÁRCIO" title2="MORAES" />
                <p className="mb-3 text-center">Engenheiro de Software - Desenvolvedor Web Front-End</p>
            </motion.div>

            <div className="flex gap-6 flex-wrap my-6">
                <a 
                    href="https://github.com/marcio-moraes" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl bg-amber-400 text-black rounded-full p-2"
                >
                    <FaGithub />
                </a>
                <a 
                    href="https://www.linkedin.com/in/marciomsilva/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl bg-amber-400 text-black rounded-full p-2"
                >
                    <GrLinkedin />
                </a>
                <a 
                    href="mailto:marciomoraes1993@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-3xl bg-amber-400 text-black rounded-full p-2"
                >
                    <IoMdMail />
                </a>
                <a 
                    href="https://wa.me/5581986709660" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl bg-amber-400 text-black rounded-full p-2"
                >
                    <ImWhatsapp />
                </a>
            </div>

            <ListaIcones />

            {/* <p className="mb-3 px-5 text-center max-w-2xl"><strong>Reactjs, Nextjs, Typescript, Tailwindcss, shadcn-UI, Styled-Components, Zustand, Context API, Reducer, Redux, ReactHookForm e Zod, Tanstack Query.</strong></p> */}

            {/* <Link className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75" href={'/projetos'}>Projetos</Link> */}
            
            {/* <ThemeToggole /> */}
            
        </div>
    )
}