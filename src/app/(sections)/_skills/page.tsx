"use client"

import { Titulo } from "@/app/components/layout/titulo"
import ItemSkill from "./itemSkill"
import { useEffect, useState } from "react"

type IconeSvg = {
    id: number;
    img: string;
    nomeIcon: string;
}

export default function SkilsSection() {
    const [icones, setIcones] = useState<IconeSvg[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => {
                setIcones(data.iconesSvg)
                setLoading(false)
            })
            .catch(err => {
                console.error('Erro ao carregar ícones:', err)
                setError('Erro ao carregar ícones')
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <section className="py-20 px-6 bg-[#121212]">
                <div className="w-full max-w-7xl mx-auto">
                    <Titulo title1="Habilidades" title2="e Ferramentas" />
                    <div className="mt-10 flex justify-center">
                        <p className="text-amber-400 text-xl">Carregando dados...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="py-20 px-6 bg-[#121212]">
                <div className="w-full max-w-7xl mx-auto">
                    <Titulo title1="Habilidades" title2="e Ferramentas" />
                    <div className="mt-10 flex justify-center">
                        <p className="text-red-400 text-xl">{error}</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="skills" className="min-h-[90vh] py-30 px-6 bg-[#121212]">
            <div className="w-full max-w-7xl mx-auto">
                <Titulo title1="Habilidades" title2="e Ferramentas" />
                
                <div className="mt-15 flex justify-center gap-4 flex-wrap">
                    {icones.map((icone) => (
                        <ItemSkill 
                            key={icone.id.toString()} 
                            iconUrl={icone.img} 
                            iconName={icone.nomeIcon} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}