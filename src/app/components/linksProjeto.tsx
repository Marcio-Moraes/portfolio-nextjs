import Link from "next/link";
type Props = {   
    linkProjeto: string;
    github: string;
}

export const LinksProjeto = ({linkProjeto, github}: Props) => {
    return(
        <div className="">
            <div className="text-center mt-10">
                links do projeto:
            </div>
            
            <div className="flex justify-center gap-6">
                <Link 
                    className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75" 
                    href={linkProjeto}
                    target="_blank"
                >
                    Veja Online
                </Link>

                <Link 
                    className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 block my-5 hover:opacity-75" 
                    href={github}
                    target="_blank"
                >
                    GitHub
                </Link>
            </div>
        </div>
    )
};