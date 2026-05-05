

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ListaCursos() {
  return (
    <Accordion type="single" collapsible className="w-full pt-20">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5">Análise e Desenvolvimento de Sistemas - Descomplica Faculdade Digital "Cursando"</AccordionTrigger>
        <AccordionContent className="pt-5 pb-20">
          Estou no segundo período do curos de ADS, com previsão de conclusão para 2028.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5">Fundamentos de React</AccordionTrigger>
        <AccordionContent>
          B7Web
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5">Next.js Fundamentos</AccordionTrigger>
        <AccordionContent>
          B7Web
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-bold text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5">React Fundamentos</AccordionTrigger>
        <AccordionContent>
          B7Web
        </AccordionContent>
      </AccordionItem>
      
    </Accordion>
  )
}
