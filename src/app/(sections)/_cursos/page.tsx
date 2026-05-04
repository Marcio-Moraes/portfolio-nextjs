"use client"

import { Titulo } from "../../components/layout/titulo";
import { ListaCursos } from "../../components/listaCursos";

export default function EducacaoSection() {
    return (
        <div className="h-screen py-30 bg-[#121212]" id="cursos">
            <div className="container mx-auto">
                <Titulo title1="Educação"  title2="e Cursos" />
                <ListaCursos />
            </div>
        </div>
    );
}