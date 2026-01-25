import { Texto } from "@/type/texto";

export const SubTitulo = ({texto, classeNome}: Texto) => {
    return(
        <h2 className={`text-[20px] font-bold mb-1 mt-5 uppercase text-amber-400 ${classeNome}`}>
            {texto}
        </h2>
    );
}