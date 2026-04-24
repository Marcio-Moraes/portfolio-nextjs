"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { data } from "@/data"
import { ProjetoItem } from "./projetoItem"
import { Titulo } from "./layout/titulo"

export const CarrosselProjetos = () => {
    return(
        <div className="container mx-auto py-20 px-15">
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
                    {data.projetosFront.map((i)=>(
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