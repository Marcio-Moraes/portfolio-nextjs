import { Metadata } from "next";
import { Titulo } from "../../components/layout/titulo";
import { Projetos } from "../../components/projetos";


export const metadata: Metadata = {
    title: "Márcio Moraes Dev",
    description: 'Lista de projetos desenvolvidos',
};

export default function ProjetosSection() {
    return(
        <div className="min-h-dvh py-30" id="projetos">
            <Titulo title1="Lista de" title2="Projetos" />
            <Projetos />
        </div>
    )
}