"use client"

import { SubTitulo } from "@/app/components/layout/subTitulo";
import { Titulo } from "../../components/layout/titulo";
import { ListaCursos } from "../../components/listaCursos";
import { ListaFormacao } from "../../components/listaFormacao";

export default function EducacaoSection() {
    return (
        <div className="min-h-screen py-30 bg-[#121212]" id="cursos">
            <div className="container mx-auto px-4">
                <Titulo title1="Educação"  title2="e Cursos" />
                <SubTitulo texto="Formação" classeNome="text-center mt-10" />
                <ListaFormacao />
                <SubTitulo texto="Cursos" classeNome="text-center mt-10" />
                <ListaCursos />
            </div>
        </div>
    );
}