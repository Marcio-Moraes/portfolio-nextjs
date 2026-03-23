"use client"

import Link from "next/link"
import { Titulo } from "./layout/titulo"
import { ThemeToggole } from "@/components/theme-toggle"
import { ListaIcones } from "./listaIcones"
import { motion } from "motion/react"

export const Marcio = () => {
    return(
        <div className="h-screen max-h-[78vh] bg-red flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Titulo title1="Márcio" title2="Moraes" />
                <p className="mb-3 text-center">Software Engine - Front-End</p>
            </motion.div>
            <ListaIcones />

            {/* <p className="mb-3 px-5 text-center max-w-2xl"><strong>Reactjs, Nextjs, Typescript, Tailwindcss, shadcn-UI, Styled-Components, Zustand, Context API, Reducer, Redux, ReactHookForm e Zod, Tanstack Query.</strong></p> */}

            <Link className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75" href={'/projetos'}>Projetos</Link>
            
            <ThemeToggole />
            
        </div>
    )
}