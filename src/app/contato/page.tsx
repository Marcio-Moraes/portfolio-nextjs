import { Linkedin, Mail, MessageCircleCode, Phone } from "lucide-react";
import { SubTitulo } from "../components/layout/subTitulo";
import { Titulo } from "../components/layout/titulo";
import Link from "next/link";
import FormContato from "../components/layout/formContato";


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
                                href="tel:+5581986709660" 
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                                <Phone className="text-amber-400" /> 81 98670-9660
                            </Link>
                        </li>
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
                <div className="w-full p-5">
                    <FormContato />
                </div>
            </div>
        </div>
    )
}

export default Contato;