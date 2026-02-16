import { data } from "@/data";
import { Titulo } from "@/app/components/layout/titulo";
import Image from "next/image";
import { Projeto } from "@/type/projeto";
import Link from "next/link";
import { LinksProjeto } from "@/app/components/linksProjeto";

type PageParams = {
    params: {
        name: string;
    };
};



const Page = async ({params}: PageParams) => {
    const {name} = await params;
    const nomeProjeto: Projeto[] = data.projetosFront.filter(i => i.link.includes(name));

    if(nomeProjeto.length === 0) {
        return (
            <div className="w-full max-w-7xl h-dvh m-auto p-10 my-10">
                <Titulo title1="Projeto não encontrado" title2="" mt="capitalize text-center" />
            </div>
        )
    };

    return(
        <div className="w-full max-w-7xl m-auto p-10 my-10">
                {nomeProjeto.map((m, iM) => {
                    return(
                        <div key={iM} className="w-full max-w-7xl m-auto p-10 my-10">
                            <Titulo title1={m.label} title2="" mt="capitalize text-center" />

                            <LinksProjeto linkProjeto={m.linkProjeto} github={m.github} />

                            <Image 
                                src={m.img} 
                                alt={m.label} 
                                width={1200}
                                height={800}
                                className="w-full my-10 border border-amber-400"  
                            />

                            <div className="my-10">
                                <div className="mb-10">
                                    <p>{m.label}</p>
                                    
                                    <p className="mb-5">Tecnologias utilizadas: <strong>({m.tech})</strong></p>

                                    <p>{m.desc}</p>
                                </div>
                            </div>

                            <LinksProjeto linkProjeto={m.linkProjeto} github={m.github} />

                        </div>
                    )
                })}            
        </div>
    )
}

export default Page;