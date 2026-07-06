"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ProjetoItem } from "./projetoItem"
import { Titulo } from "./layout/titulo"
import { useEffect, useState } from "react"

type Projeto = {
    id: number;
    label: string;
    link: string;
    linkProjeto: string;
    img: string;
    github: string;
    tech?: string[];
    desc: string;
}

export const CarrosselProjetos = () => {
    const [projetos, setProjetos] = useState<Projeto[]>([]);

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => setProjetos(data.projetosFront))
            .catch(err => console.error('Erro ao carregar projetos:', err));
    }, []);

    return(
        <div className="container mx-auto py-30 px-15" id="projetos">
            <Titulo title1="Meus" title2="Projetos" mb="mb-20"/>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}

                plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnInteraction: true,
                }),
            ]}
            >
                <CarouselContent className="mb-1">
                    {projetos.map((i)=>(
                        <CarouselItem key={i.id} className="md:basis-1/1 lg:basis-1/2">
                            <ProjetoItem key={i.id} dadosType={i} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}