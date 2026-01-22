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
            <div className="flex justify-between py-6">
                <div className="">
                    {dadosType.label}
                </div>

                <div className="">
                    Code
                </div>
            </div>
            
        </div>
    )
}