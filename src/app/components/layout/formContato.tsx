"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string;
    lastName: string;
}


const FormContato = () => {
    const {handleSubmit, register} = useForm<Inputs>();

    const formEnvioContato:SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    return(
        <form 
            onSubmit={handleSubmit(formEnvioContato)}
            action="" 
            className="px-6 py-10 flex flex-col gap-6 border rounded"
        >

            <input 
                {...register('name')} 
                className="border border-amber-400 rounded p-3 w-full" 
                placeholder="Digite seu nome"
            />

            <input 
                {...register('lastName')} 
                className="border border-amber-400 rounded p-3 w-full" 
                placeholder="Digite seu sobrenome"
            />
            
            <input type="submit" value="Enviar" className="bg-amber-400 hover:bg-amber-100 text-black border border-amber-400 font-bold uppercase p-3 cursor-pointer rounded" />


        </form>
    )
}

export default FormContato;