"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
    name: string;
    lastName: string;
    email: string;
    message: string;
}

const FormContato = () => {
    const {handleSubmit, register, formState: { errors, isSubmitting }} = useForm<Inputs>();
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const formEnvioContato: SubmitHandler<Inputs> = async (data) => {
        try {
            setStatus('idle');
            setStatusMessage('');
            
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMessage(result.message);
                // Limpar o formulário após envio bem-sucedido
                const form = document.querySelector('form');
                if (form) form.reset();
            } else {
                setStatus('error');
                setStatusMessage(result.error || 'Erro ao enviar mensagem');
            }
        } catch (error) {
            setStatus('error');
            setStatusMessage('Erro de conexão. Tente novamente.');
            console.error('Erro:', error);
        }
    }

    return(
        <form 
            onSubmit={handleSubmit(formEnvioContato)}
            className="px-6 py-10 flex flex-col gap-6 border rounded"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input 
                        {...register('name', { 
                            required: 'Nome é obrigatório',
                            minLength: {
                                value: 2,
                                message: 'Nome deve ter pelo menos 2 caracteres'
                            }
                        })} 
                        className={`border rounded p-3 w-full ${errors.name ? 'border-red-400' : 'border-amber-400'}`}
                        placeholder="Digite seu nome"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                    )}
                </div>

                <div>
                    <input 
                        {...register('lastName', { 
                            required: 'Sobrenome é obrigatório',
                            minLength: {
                                value: 2,
                                message: 'Sobrenome deve ter pelo menos 2 caracteres'
                            }
                        })} 
                        className={`border rounded p-3 w-full ${errors.lastName ? 'border-red-400' : 'border-amber-400'}`}
                        placeholder="Digite seu sobrenome"
                    />
                    {errors.lastName && (
                        <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>
                    )}
                </div>
            </div>

            <div>
                <input 
                    {...register('email', { 
                        required: 'Email é obrigatório',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email inválido'
                        }
                    })} 
                    className={`border rounded p-3 w-full ${errors.email ? 'border-red-400' : 'border-amber-400'}`}
                    placeholder="Digite seu email"
                    type="email"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                )}
            </div>

            <div>
                <textarea 
                    {...register('message', { 
                        required: 'Mensagem é obrigatória',
                        minLength: {
                            value: 10,
                            message: 'Mensagem deve ter pelo menos 10 caracteres'
                        }
                    })} 
                    className={`border rounded p-3 w-full h-32 resize-none ${errors.message ? 'border-red-400' : 'border-amber-400'}`}
                    placeholder="Digite sua mensagem"
                />
                {errors.message && (
                    <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
                )}
            </div>

            {statusMessage && (
                <div className={`p-3 rounded text-center ${
                    status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                    {statusMessage}
                </div>
            )}

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-amber-400 hover:bg-amber-100 disabled:bg-gray-300 disabled:cursor-not-allowed text-black border border-amber-400 font-bold uppercase p-3 cursor-pointer rounded transition-colors"
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    )
}

export default FormContato;