import { Metadata } from "next";
import { Titulo } from "../components/layout/titulo";
import { Projetos } from "../components/projetos";


export const metadata: Metadata = {
    title: "Márcio Moraes Dev",
    description: 'Lista de projetos desenvolvidos',
};

export default function ProjetosPage() {
    return(
        <div className="">
            <Titulo title1="Lista de" title2="Projetos" mt="mt-10" />
            <Projetos />
        </div>
    )
}