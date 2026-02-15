import { Projeto } from "@/type/projeto"
import Image from "next/image"
import Link from "next/link";

type Props = {
    dadosType: Projeto;    
}

export const ProjetoItem = ({dadosType}: Props)=>{
    return(
        <div className="w-full rounded max-w-[600] py-3.5 px-2 border border-amber-400">
            <Link href={dadosType.link}>
                <Image
                    src={`${dadosType.img}`}
                    alt=""
                    width={600}
                    height={280}
                />
            </Link>
            <div className="flex justify-between py-6 px-4">
                <div className="w-full">
                    <h2 className="text-2xl text-amber-400 text-center font-bold mb-4 ">
                        {dadosType.label}
                    </h2>
                    

                    <p className="text-center">{dadosType.desc}</p>

                    <h3 className="mt-5 text-center">Tecnologias utilizadas: ({dadosType.tech})</h3>

                    
                    
                    <div className="mt-4 flex flex-col md:flex-row justify-center gap-3">
                        <Link 
                            href={dadosType.link} 
                            className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75 text-center"
                        >
                            Detalhes
                        </Link>
                    
                        <Link 
                            href={dadosType.github}
                            target="_blank"
                            className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75 text-center"
                        >
                            GitHub
                        </Link>

                        <Link 
                            href={dadosType.linkProjeto} 
                            target="_blank"
                            className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75 text-center"
                        >
                            Veja Online
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}