import { data } from "@/data";
import { Titulo } from "@/app/components/layout/titulo";
import Image from "next/image";

type PageParams = {
    params: {
        name: string;
    };
};



const Page = async ({params}: PageParams) => {
    const {name} = await params;
    const nomeProjeto = data.projetosFront.filter(i => i.label == "Loja B7story - Front-End")


    return(
        <div className="w-full max-w-7xl m-auto p-10 my-10">
            <Titulo title1={name} title2="" mt="capitalize text-center" />

            <Image 
                src={data.projetosFront[0].img} 
                alt={data.projetosFront[0].label} 
                width={1200}
                height={800}
                className="w-full my-10"  />
            
            <div className="my-10">
                <div className="mb-10">Descrição do projeto</div>
                
                <div className="">
                    {data.projetosFront.map((item, index) => (
                            <div key={item.id}>{item.label}</div>                     
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page;