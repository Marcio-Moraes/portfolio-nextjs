"use client"

import { ProjetoItem } from "./projetoItem"
import { useEffect, useState } from "react"
import { Projeto } from "@/type/projeto"

export const Projetos = ()=> {
    const [projetos, setProjetos] = useState<Projeto[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => {
                setProjetos(data.projetosFront)
                setLoading(false)
            })
            .catch(err => {
                console.error('Erro ao carregar projetos:', err)
                setError('Erro ao carregar projetos')
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="py-20 px-6">
                <div className="w-full max-w-7xl m-auto flex justify-center">
                    <p className="text-amber-400 text-xl">Carregando projetos...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="py-20 px-6">
                <div className="w-full max-w-7xl m-auto flex justify-center">
                    <p className="text-red-400 text-xl">{error}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="py-20 px-6">
            <div className="w-full max-w-7xl m-auto flex justify-center gap-6 flex-wrap">
                {projetos.map((i)=>(
                    <ProjetoItem key={i.id} dadosType={i} />
                ))}
            </div>
        </div>
    )
}