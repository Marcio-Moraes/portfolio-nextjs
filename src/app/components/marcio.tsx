import Link from "next/link"
import { Titulo } from "./layout/titulo"
import { Button } from "@/components/ui/button"
import { ThemeToggole } from "@/components/theme-toggle"

export const Marcio = () => {
    return(
        <div className="h-screen max-h-[78vh] bg-red flex flex-col items-center justify-center">
            <Titulo title1="Márcio" title2="Moraes" />
            <p className="mb-3">Software Engine - Front-End - Pleno</p>
            <Link className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75" href={'/projetos'}>Projetos</Link>
            
            <ThemeToggole />
        </div>
    )
}