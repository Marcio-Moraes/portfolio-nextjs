import { Texto } from "@/type/texto"


export const Paragrafo = ({texto}: Texto) => {
    return(
        <p className="mb-3">{texto}</p>
    )
}