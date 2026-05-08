

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ListaFormacao() {
  return (
    <Accordion type="single" collapsible className="w-full pt-4">
      <AccordionItem value="educ-1">
        <AccordionTrigger className="font-bold text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5 [&[data-state=open]]:bg-amber-400">Análise e Desenvolvimento de Sistemas - Graduação</AccordionTrigger>
        <AccordionContent className="px-2 pt-5 pb-20">
          <h3 className="text-xl mb-1 font-bold">Descomplica Faculdade Digital "Cursando"</h3>
          Estou no segundo período do curos de ADS, com previsão de conclusão para 2028.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="educ-2">
        <AccordionTrigger className="font-bold text-lg bg-amber-50 hover:bg-amber-400 no-underline text-black cursor-pointer px-2 mb-5 [&[data-state=open]]:bg-amber-400">Informática para Internet - Técnico</AccordionTrigger>
        <AccordionContent>
          <h3 className="text-xl mb-1 font-bold">Curso técnico em Informática para Internet, com foco em desenvolvimento web. Concluído em 2014.</h3>
          

          <ul className="list-disc list-inside ml-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>CodeIgniter</li>
            <li>Sistemas Operacionais Windows e Linux</li>
            <li>Design de Interface e Usabilidade</li>
            <li>Redes de Computadores</li>
            <li>Manutenção e Montagem de Computadores</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
