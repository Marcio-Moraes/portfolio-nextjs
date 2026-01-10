import Image from "next/image";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import { Titulo } from "../components/layout/titulo";
import Marcio from "../../assets/marcio-moraes-desenvolvedor-front-end.jpg"

export default function Sobre()   {
    return(
        <div className="">
            <Header />
                <div className="w-full max-w-7xl m-auto p-5 flex flex-col md:flex-row items-center gap-6 md:min-h-screen">
                    <div className="w-full flex justify-center">
                        <Image 
                            src={Marcio}
                            width={800}
                            height={200}
                            alt="Márcio Moraes"
                            className="max-w-[400]"
                        />
                    </div>
                    <div className="w-full">
                        <Titulo title1="Sobre" title2="mim" />
                        <p>Analista de Sistemas</p>
                        <p>Desenvolvedor com mais de 7 anos de experiência em desenvolvimento web. Já trabalhei com várias tecnologias diferentes . Desenvolvendo interfaces de sistemas web, criando lojas virtuais, landingPages, projetos institucionais dentre outros...</p>
                    </div>
                </div>
            <Footer />    
        </div>
    )    
}