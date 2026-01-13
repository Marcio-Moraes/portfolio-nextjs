import { data } from "@/data"
import { ProjetoItem } from "./projetoItem"

export const Projetos = ()=> {
    return(
        <div className="py-20 px-6">
            <div className="w-full max-w-7xl m-auto flex justify-center gap-6 flex-wrap">
                {data.projetosFront.map((i)=>(
                    <ProjetoItem key={i.id} dadosType={i} />
                ))}
            </div>
        </div>
    )
}