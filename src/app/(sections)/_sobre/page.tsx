"use client"

import Image from "next/image";
import { Titulo } from "../../components/layout/titulo";
import Marcio from "../../../assets/marcio-moraes-desenvolvedor-front-end.jpg"
import { SubTitulo } from "../../components/layout/subTitulo";
import { Paragrafo } from "../../components/layout/paragrafo";
import { motion } from "motion/react";
import { useRef } from "react";


export default function SobreSection()   {
      const scrollRef = useRef(null)



    return(
        <div className="bg-[#121212]" id="sobre">
                <div className="w-full max-w-7xl m-auto py-20 px-5 flex flex-col md:flex-row items-center gap-6 md:min-h-screen">
                    <div className="w-full flex justify-center no-scrollbar" ref={scrollRef}>
                        <motion.div
                           initial={{ opacity: 0, y: 50 }} // Estado inicial (invisível e abaixo)
                           whileInView={{ opacity: 1, y: 0 }} // Estado visível (quando aparece)
                           transition={{ duration: 0.5 }} // Duração da animação
                        >
                            <Image 
                                src={Marcio}
                                width={400}
                                height={650}
                                alt="Márcio Moraes"
                                className="max-w-[400] no-scrollbar"
                            />
                        </motion.div>
                    </div>
                    <div className="w-full">
                        <Titulo title1="Sobre" title2="mim" />
                        <SubTitulo texto="Quem sou eu?" />
                        <Paragrafo 
                            texto="Pernambucano, 35 anos. Desenvolvedor Front-End à mais de 8 anos."
                        />
                        <Paragrafo 
                            texto="Utilizo as seguintes tecnologias: Reactjs, Nextjs, Typescript, Tailwindcss, shadcn-UI, Zustand, ReactHookForm e Zod, Tanstacj Query."
                        />
                        <Paragrafo 
                            texto="Por muitos anos, desenvolvi para WordPress com php, criando temas e plugins, e realizando manutenções mensais em projetos para agências de marketing como colaborador."
                        />

                        <Paragrafo 
                            texto="Atuo também como freelancer, e já desenvolvi interfaces de sistemas web, lojas online, single pages 'SPAs', landing pages, para os mais variados setores."
                        />

                        <Paragrafo 
                            texto="À alguns anos, tenho focado no Reactjs, com Typescript, para desenvolver interfaces de aplicações web."
                        />

                        <SubTitulo texto="Formação" />
                        <Paragrafo 
                            texto="Análise e Desenvolvimento de Sistemas - Cursando"
                        />

                        <SubTitulo texto="Curso Técnico" />
                        <Paragrafo 
                            texto="Desenvolvimento Web - Concluído"
                        />

                        <SubTitulo texto="Carreira profissional" />

                        <ul className="list-disc ml-6">
                            <li className="font-bold">Desenvolvedor Front-End Pleno - Remoto</li>
                                <ul className="list-disc ml-8">
                                    <li>PORTO SAFRA S.A</li>
                                    <li>Início: 06/2025</li>
                                    <li className="mb-3">Período: 7 meses - Até o momento</li>
                                </ul>
                            <li className="font-bold">Desenvolvedor Front-End Pleno - Remoto</li>
                                <ul className="list-disc ml-8">
                                    <li>Agência Weber</li>
                                    <li>Início: 02/2022</li>
                                    <li className="mb-3">Período: 3 anos e 3 meses</li>
                                </ul>
                        </ul>

                        <Paragrafo 
                            texto="Outras experiências você pode ver no meu currículo completo."
                        />
                    </div>
                </div>
                
        </div>
    )    
}