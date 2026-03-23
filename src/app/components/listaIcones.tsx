import { data } from "@/data";
import { motion } from "motion/react";
import Image from "next/image";


type ListaIconesProps = {
    id: number;
    nomeIcon: string;
    img: string;
}

export const ListaIcones = () => {
    return(
        <ul className="flex flex-wrap justify-center gap-4 my-8 px-5">
            {data.icones.map((i)=> (
                <motion.li
                    key={i.id} className={`text-white fill-amber-300 ${i.nomeIcon == 'Github' && 'bg-white '}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        width={40}
                        height={40}
                        alt={i.nomeIcon}
                        src={i.img}
                        className="fill-amber-400 stroke-amber-400" 
                    />
                </motion.li>
            ))}
        </ul>
    )
}