import { Texto } from "@/type/texto";

export const SubTitulo = ({texto}: Texto) => {
    return(
        <h2 className="text-[20px] font-bold mb-1 mt-5 uppercase text-amber-400">
            {texto}
        </h2>
    );
}