

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ListaCursos() {
  return (
    <Accordion type="single" collapsible className="w-full pt-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold text-xl md:text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5">Trilha Fundamentos</AccordionTrigger>
        <AccordionContent className="px-2 pt-5 pb-20">
          <h3 className="text-sm md:text-xl mb-1 font-bold">B7Web Trilha Fundamentos</h3>
          
          <ul className="list-disc list-inside">
            <li>HTML, CSS</li>
            <li>JavaScript Fundamentos</li>
            <li>JavaScript Avançado</li>
            <li>Fundamentos de Git</li>
            <li>GitHub na Prática</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold text-xl md:text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5">Trilha Front-End</AccordionTrigger>
        <AccordionContent className="px-2 pt-5 pb-20">
          <h3 className="text-sm md:text-xl mb-1 font-bold">B7Web Trilha de Cursos Front-End</h3>
          
          <ul className="list-disc list-inside">
            <li>Fundamentos do Tailwind</li>
            <li>Responsividade e Interações com Tailwind</li>
            <li>Typescript do Zero</li>
            <li>Fundamentos de Reactjs</li>
            <li>Reactjs Intermediário</li>
            <li>Tanstack Query</li>
            <li>React Hook Form e Zod</li>
            <li>Shadcn UI com Reactjs</li>
            <li>Upload no Reactjs</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold text-xl md:text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5">Trilha Back-End</AccordionTrigger>
        <AccordionContent className="px-2 pt-5 pb-20">
          <h3 className="text-sm md:text-xl mb-1 font-bold">B7Web Trilha de Cursos Back-End</h3>
          
          <ul className="list-disc list-inside">
            <li>Fundamentos do Nodejs</li>
            <li>Nodejs Avançado</li>
            <li>Express e MongoDB</li>
            <li>API Rest com Nodejs</li>
            <li>Autenticação com Nodejs</li>
            <li>Deploy com Nodejs</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      
      
      
    </Accordion>
  )
}
