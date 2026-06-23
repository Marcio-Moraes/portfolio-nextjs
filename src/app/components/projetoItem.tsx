import { Projeto } from "@/type/projeto"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link";
import { BotaoProjetoItem } from "./layout/botaoProjetoItem";

type Props = {
    dadosType: Projeto;
}

export const ProjetoItem = ({dadosType}: Props)=>{
    return(
        <div className="w-full rounded max-w-[400] py-3.5 px-2 border border-amber-400">
            <Link href={dadosType.linkProjeto} target="_blank">
                <Image
                    src={`${dadosType.img}`}
                    alt={`${dadosType.label}`}
                    width={600}
                    height={280}
                />
            </Link>
            <div className="flex justify-between py-6 px-4">
                <div className="w-full">
                    <h2 className="text-2xl text-amber-400 text-center font-bold mb-4 ">
                        {dadosType.label}
                    </h2>
                    

                    <p className="text-center hidden md:block">{dadosType.desc}</p>

                    <div className="mt-5 text-center flex flex-wrap justify-center gap-2">
                        {dadosType.tech?.map((tech) => <span key={tech} className="text-xs border border-amber-400 px-2 py-1 rounded">{tech}</span>)}
                    </div>

                    
                    
                    <div className="mt-4 flex justify-center gap-2.5">
                        <BotaoProjetoItem targetblank href={dadosType.github}>
                            <FaGithub />
                        </BotaoProjetoItem>

                        <BotaoProjetoItem targetblank href={dadosType.linkProjeto}>
                            <FaExternalLinkAlt />
                        </BotaoProjetoItem>
                    </div>
                </div>
            </div>
            
        </div>
    )
}