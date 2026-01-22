import { Titulo } from "../components/layout/titulo";

const Contato = () => {
    return(
        <div>
            <Titulo title1="Fale" title2="Comigo" mt="mt-10" />
            <div className="w-full max-w-7xl m-auto p-10 my-10 flex flex-col md:flex-row gap-10 bg-blue-400">
                <div className="bg-amber-400 w-full p-5">...</div>
                <div className="bg-emerald-400 w-full p-5">...</div>
            </div>
        </div>
    )
}

export default Contato;