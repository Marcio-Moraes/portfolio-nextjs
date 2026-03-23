import { Projeto } from "@/type/projeto"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import Image from "next/image"
import Link from "next/link";
import { BotaoProjetoItem } from "./layout/botaoProjetoItem";

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
                    

                    <p className="text-center hidden md:block">{dadosType.desc}</p>

                    <h3 className="mt-5 text-center">Tecnologias utilizadas: ({dadosType.tech})</h3>

                    
                    
                    <div className="mt-4 flex justify-center gap-2.5">
                        <BotaoProjetoItem href={dadosType.link}>
                            <TbListDetails />
                            <div className="hidden md:flex">Detalhes</div>
                        </BotaoProjetoItem>

                        <BotaoProjetoItem href={dadosType.github}>
                            <FaGithub />
                            <div className="hidden md:flex">GitHub</div>
                        </BotaoProjetoItem>

                        <BotaoProjetoItem href={dadosType.linkProjeto}>
                            <FaExternalLinkAlt />
                            <div className="hidden md:flex">Link</div>
                        </BotaoProjetoItem>
                    </div>
                </div>
            </div>
            
        </div>
    )
}