import { data } from "@/data";
import { Titulo } from "@/app/components/layout/titulo";
import Image from "next/image";
import { Projeto } from "@/type/projeto";
import Link from "next/link";

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

                            <div className="">
                                <div className="text-center mt-10">
                                    links do projeto:
                                </div>
                                
                                <div className="flex justify-center gap-6">
                                    <Link 
                                        className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75" 
                                        href={m.linkProjeto}
                                        target="_blank"
                                    >
                                        Veja Online
                                    </Link>

                                    <Link 
                                        className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75" 
                                        href={m.github}
                                        target="_blank"
                                    >
                                        GitHub
                                    </Link>
                                </div>
                            </div>

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

                                    <p>{m.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}            
        </div>
    )
}

export default Page;