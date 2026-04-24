import { Mail, Phone } from "lucide-react";
import { SubTitulo } from "../../components/layout/subTitulo";
import { Titulo } from "../../components/layout/titulo";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";





const ContatoSection = () => {
    return(
        <div id="contato">
            <Titulo title1="Fale" title2="Comigo" mt="mt-10" />
            <div className="w-full max-w-7xl m-auto min-h-dvh p-10 my-10 flex flex-col md:flex-row gap-10">
                <div className="w-full p-5">
                    <SubTitulo texto="Como posso ajudar?" classeNome="mb-5" />
                    
                    <p>Você pode entrar em contato, Preenchendo o formulário, ou através do WhatsApp, Email, ou minhas redes sociais..</p>

                    <ul className="flex flex-col justify-start gap-5 my-10">
                        <li className="">
                            <Link 
                                href="tel:+5581986709660" 
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                                <FaPhone className="text-amber-400 text-lg" /> 81 98670-9660
                            </Link>
                        </li>
                        <li className="">
                            <Link 
                                href="https://wa.me/5581986709660" 
                                target="_blank"
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                                <ImWhatsapp className="text-amber-400 text-lg" /> WhatsApp
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="mailto:marciomoraes.cdd@gmail.com" 
                                target="_blank"
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                                <IoMdMail className="text-amber-400 text-lg" /> marciomoraes.cdd@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="https://www.linkedin.com/in/marciomsilva/" 
                                target="_blank"
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                               <GrLinkedin className="text-amber-400 text-lg" /> Linkedin
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="https://www.linkedin.com/in/marciomsilva/" 
                                target="_blank"
                                className="inline-flex gap-2 py-1 pr-5"
                            >
                                <FaGithub className="text-amber-400 text-lg" /> GitHub
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full p-5">
                    
                </div>
            </div>
        </div>
    )
}

export default ContatoSection;