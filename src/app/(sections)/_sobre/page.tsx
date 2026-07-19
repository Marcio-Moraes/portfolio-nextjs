"use client"

import Image from "next/image";
import { Titulo } from "../../components/layout/titulo";
import Marcio from "../../../assets/marcio-moraes-desenvolvedor-front-end.jpg"
import { SubTitulo } from "../../components/layout/subTitulo";
import { Paragrafo } from "../../components/layout/paragrafo";
import { motion } from "motion/react";
import { useRef } from "react";
import { ListaIcones } from "@/app/components/listaIcones";


export default function SobreSection()   {
      const scrollRef = useRef(null)



    return(
        <div className="" id="sobre">
                <div className="w-full max-w-7xl m-auto py-30 px-5 flex flex-col md:flex-row items-center gap-6 md:min-h-screen">
                    <div className="w-full flex justify-center no-scrollbar" ref={scrollRef}>
                        <motion.div
                           initial={{ opacity: 0, y: 50 }} // Estado inicial (invisível e abaixo)
                           whileInView={{ opacity: 1, y: 0 }} // Estado visível (quando aparece)
                           transition={{ duration: 0.8 }} // Duração da animação
                        >
                            <Image 
                                src={Marcio}
                                width={400}                                
                                alt="Márcio Moraes"
                                className="max-w-[300px] md:max-w-[400px] no-scrollbar"
                            />
                        </motion.div>
                    </div>
                    <div className="w-full">
                        
                        <Titulo title1="Sobre" title2="mim" />

                        <ListaIcones />
                        
                        <SubTitulo texto="Quem sou eu?" />
                        <Paragrafo 
                            texto="Desenvolvedor Web há mais de 7 anos."
                        />

                        <Paragrafo 
                            texto="Já desenvolvi interfaces de sistemas web, lojas online, single pages 'SPAs', landing pages, para os mais variados setores, como colaborador e freelancer."
                        />
                        
                        <Paragrafo 
                            texto="Desenvolvo principalmente o front-end, com Reactjs, Typescript, Nextjs, tanstack Query, Zustand, ReactHookForm e Zod, e também com WordPress e php, criando temas e plugins."
                        />

                        <Paragrafo 
                            texto="Estou sempre buscando novos conhecimentos e experiências para aprimorar minhas habilidades como desenvolvedor."
                        />

                    </div>
                </div>
                
        </div>
    )    
}