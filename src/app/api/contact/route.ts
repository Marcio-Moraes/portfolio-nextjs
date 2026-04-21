import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, lastName, email, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Dados do formulário
    const formData = {
      nomeCompleto: `${name} ${lastName}`.trim(),
      email,
      mensagem: message,
      data: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
      })
    };

    console.log('Dados do formulário:', formData);

    // INTEGRAÇÃO COM SERVIÇOS DE EMAIL:
    // 
    // Opção 1: Resend (recomendado)
    // Precisa instalar: npm install resend
    // E configurar variável de ambiente: RESEND_API_KEY
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'seu-site@seu-dominio.com',
      to: 'seu-email@exemplo.com',
      subject: `Novo contato de ${formData.nomeCompleto}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${formData.nomeCompleto}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Data:</strong> ${formData.data}</p>
        <hr>
        <h3>Mensagem:</h3>
        <p>${formData.mensagem}</p>
      `
    });
    */

    // Opção 2: Nodemailer (SMTP)
    // Precisa instalar: npm install nodemailer
    /*
    import nodemailer from 'nodemailer';
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'seu-email@exemplo.com',
      subject: `Novo contato de ${formData.nomeCompleto}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${formData.nomeCompleto}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Data:</strong> ${formData.data}</p>
        <hr>
        <h3>Mensagem:</h3>
        <p>${formData.mensagem}</p>
      `
    });
    */

    // Por enquanto, vamos apenas logar e simular o envio
    // Em produção, substitua este código por uma das opções acima
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
