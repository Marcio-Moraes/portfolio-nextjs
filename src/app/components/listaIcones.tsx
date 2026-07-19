import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Icone = {
    id: number;
    nomeIcon: string;
    img: string;
}

export const ListaIcones = () => {
    const [icones, setIcones] = useState<Icone[]>([]);

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => setIcones(data.icones))
            .catch(err => console.error('Erro ao carregar ícones:', err));
    }, []);

    return(
        <ul className="flex flex-wrap justify-center gap-3 my-8 px-5">
            {icones.map((i)=> (
                <motion.li
                    key={i.id} className={`text-white bg-gray-600 p-1 rounded-md fill-amber-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        width={30}
                        height={30}
                        alt={i.nomeIcon}
                        src={i.img}
                        className="fill-amber-400 stroke-amber-400"
                    />
                </motion.li>
            ))}
        </ul>
    )
}