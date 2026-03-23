"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { data } from "@/data"
import { ProjetoItem } from "./projetoItem"

export const CarrosselProjetos = () => {
    return(
        <div className="container mx-auto px-15">
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