# Configuração de Envio de Email

O formulário de contato está funcionando, mas para enviar emails reais você precisa configurar um dos serviços abaixo.

## Opção 1: Resend (Recomendado)

1. Instale o Resend:
```bash
npm install resend
```

2. Crie uma conta em [resend.com](https://resend.com)

3. Adicione ao seu arquivo `.env.local`:
```
RESEND_API_KEY=sua_chave_api_aqui
```

4. Descomente e modifique o código do Resend em `src/app/api/contact/route.ts`

## Opção 2: Nodemailer (SMTP)

1. Instale o Nodemailer:
```bash
npm install nodemailer
```

2. Adicione ao seu arquivo `.env.local`:
```
SMTP_HOST=smtp.seu-provedor.com
SMTP_PORT=587
SMTP_USER=seu_email@exemplo.com
SMTP_PASS=sua_senha
```

3. Descomente o código do Nodemailer em `src/app/api/contact/route.ts`

## Teste Local

Para testar localmente:
1. Execute `npm run dev`
2. Preencha o formulário na página de contato
3. Verifique o console para ver os dados (funciona mesmo sem configuração de email)

## Em Produção

- Configure as variáveis de ambiente no seu serviço de hospedagem
- Teste o envio real de emails
- Considere adicionar validações adicionais como captcha

## Campos do Formulário

O formulário agora inclui:
- ✅ Validação client-side com react-hook-form
- ✅ Validação server-side na API
- ✅ Feedback visual de erros
- ✅ Mensagens de sucesso/erro
- ✅ Estado de loading durante envio
- ✅ Limpeza automática após envio bem-sucedido
