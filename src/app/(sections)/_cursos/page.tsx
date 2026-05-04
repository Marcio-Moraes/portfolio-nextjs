"use client"

import { Titulo } from "../../components/layout/titulo";
import { ListaCursos } from "../../components/listaCursos";

export default function CursosSection() {
    return (
        <div className="py-30 bg-[#121212]" id="cursos">
            <div className="container mx-auto">
                <Titulo title1="Meus"  title2="Cursos" />
                <ListaCursos />
            </div>
        </div>
    );
}