import { data } from "@/data";
import Image from "next/image";


type ListaIconesProps = {
    id: number;
    nomeIcon: string;
    img: string;
}

export const ListaIcones = () => {
    return(
        <ul className="flex flex-wrap justify-center gap-5 my-8 px-5">
            {data.icones.map((i)=> (
                <li key={i.id} className="text-white fill-amber-300">
                    <Image
                        width={40}
                        height={40}
                        alt={i.nomeIcon}
                        src={i.img}
                        className="fill-amber-400 stroke-amber-400"                        
                    />
                </li>
            ))}
        </ul>
    )
}