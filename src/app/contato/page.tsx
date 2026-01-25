import { Linkedin, Mail, MessageCircleCode } from "lucide-react";
import { SubTitulo } from "../components/layout/subTitulo";
import { Titulo } from "../components/layout/titulo";
import Link from "next/link";

const Contato = () => {
    return(
        <div>
            <Titulo title1="Fale" title2="Comigo" mt="mt-10" />
            <div className="w-full max-w-7xl m-auto min-h-dvh p-10 my-10 flex flex-col md:flex-row gap-10">
                <div className="w-full p-5">
                    <SubTitulo texto="Como posso ajudar?" classeNome="mb-5" />
                    
                    <p>Você pode entrar em contato, Preenchendo o formulário, ou através do WhatsApp, Email, ou minhas redes sociais..</p>

                    <ul className="flex flex-col justify-start gap-8 my-10">
                        <li className="">
                            <Link 
                                href="#" 
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                                <MessageCircleCode className="text-amber-400" /> WhatsApp
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="mailto:marciomoraes.cdd@gmail.com" 
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                                <Mail className="text-amber-400" /> marciomoraes.cdd@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="https://www.linkedin.com/in/marciomsilva/" 
                                target="_blank"
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                               <Linkedin className="text-amber-400" /> Linkedin
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="bg-emerald-400 w-full p-5">...</div>
            </div>
        </div>
    )
}

export default Contato;