import Link from "next/link"
import { Titulo } from "./layout/titulo"

export const Marcio = () => {
    return(
        <div className="h-screen max-h-[78vh] bg-red flex flex-col items-center justify-center">
            <Titulo title1="Márcio" title2="Moraes" />
            <div className="w-full max-w-xs h-0.5 mb-5 bg-amber-400"></div>
            <p className="mb-6">Desenvolvedor Web - Pleno</p>
            <Link className="bg-amber-400 text-black font-bold uppercase px-8 py-4 block my-5 hover:opacity-75" href={'/projetos'}>Projetos</Link>
        </div>
    )
}