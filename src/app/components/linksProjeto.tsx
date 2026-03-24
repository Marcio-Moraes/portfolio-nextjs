import Link from "next/link";
import { TbListDetails } from "react-icons/tb";
import { BotaoProjetoItem } from "./layout/botaoProjetoItem";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
type Props = {   
    linkProjeto: string;
    github: string;
}

export const LinksProjeto = ({linkProjeto, github}: Props) => {
    return(
        <div className="">
            <div className="text-center mt-10 mb-5">
                links do projeto:
            </div>
            
            <div className="flex justify-center gap-6">
                <BotaoProjetoItem href={linkProjeto} targetblank>
                    <FaExternalLinkAlt />
                    <div className="hidden md:flex">Link</div>
                </BotaoProjetoItem>

                <BotaoProjetoItem href={github} targetblank>
                    <FaGithub />
                    <div className="hidden md:flex">GitHub</div>
                </BotaoProjetoItem>
            </div>
        </div>
    )
};