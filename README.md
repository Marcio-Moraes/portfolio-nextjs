# 💻 Portfolio Pessoal - Márcio Moraes

Este é o repositório oficial do meu portfolio pessoal moderno, projetado para reunir de forma elegante os projetos que desenvolvi, minha formação acadêmica, cursos e meios de contato. O projeto foi construído focando em uma experiência de usuário fluida, com transições suaves e design responsivo adaptável a qualquer dispositivo.

Você pode acessar a aplicação online através do link:
👉 **[marciomsilva.com.br](https://www.marciomsilva.com.br/)**

---

## 🚀 Tecnologias Utilizadas

O projeto utiliza um conjunto de tecnologias modernas e amplamente adotadas no ecossistema front-end atual. As principais tecnologias destacadas são:

### 🌟 Destaques (Core Stack)
*   **[React.js (v19)](https://react.dev/)**: Biblioteca JavaScript de código aberto líder para a construção de interfaces de usuário reativas baseadas em componentes reutilizáveis.
*   **[Next.js (v16)](https://nextjs.org/)**: Framework React para produção, fornecendo Server-Side Rendering (SSR), Static Site Generation (SSG), otimização automática de imagens e roteamento estruturado via App Router.

### 🎨 Estilização e UI
*   **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Framework CSS utilitário para desenvolvimento ágil de designs personalizados diretamente no HTML, promovendo alta performance e consistência visual.
*   **[Shadcn/ui](https://ui.shadcn.com/)**: Componentes de interface de usuário (UI) acessíveis, customizáveis e prontos para uso, construídos sobre Radix UI e integrados ao Tailwind CSS.
*   **[Motion (Framer Motion)](https://motion.dev/)**: Biblioteca de animações potente para React que possibilita transições de página fluidas, gestos interativos e micro-interações de alta qualidade.

### ⚙️ Linguagem e Ferramentas
*   **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto tipado de JavaScript que adiciona tipagem estática opcional, aumentando significativamente a produtividade, legibilidade e segurança do código.
*   **[Lucide React](https://lucide.dev/)** & **[React Icons](https://react-icons.github.io/react-icons/)**: Pacotes de ícones modernos, altamente customizáveis e otimizados para React.
*   **[Embla Carousel](https://www.embla-carousel.com/)**: Biblioteca flexível e de alta performance utilizada para a criação de carrosséis e sliders dinâmicos no portfolio.

---

## 📂 Estrutura de Diretórios Principal

O projeto está organizado com o padrão de diretórios do Next.js App Router dentro do diretório `src/`:

```
portfolio-nextjs/
├── public/                 # Assets estáticos (imagens, ícones, imagens dos projetos)
├── src/
│   ├── app/                # Rotas, layouts e seções principais (App Router)
│   │   ├── (sections)/     # Subseções lógicas agrupadas (Sobre, Projetos, Cursos, Contato)
│   │   ├── (site)/         # Rota principal e página inicial (/page.tsx)
│   │   └── components/     # Componentes específicos de layout e listas do site
│   ├── components/ui/      # Componentes genéricos e reutilizáveis (Shadcn/UI)
│   ├── lib/                # Configurações utilitárias (ex: classes utilitárias, shadcn/tailwind merge)
│   ├── type/               # Definições de tipos do TypeScript
│   └── data.ts             # Base de dados estática estruturada do portfolio
├── tailwind.config.js      # Configurações do Tailwind CSS
└── package.json            # Dependências e scripts de execução
```

---

## code Exemplos de Código Prático

Para facilitar a replicação e reutilização deste padrão de arquitetura em outros projetos front-end, abaixo estão dois trechos fundamentais da lógica do portfolio:

### 1. Definição Estruturada dos Dados (`src/data.ts`)
Centralizar os dados de exibição em um arquivo dedicado permite atualizar os projetos ou ícones do portfolio rapidamente sem precisar alterar código dos componentes de interface.

```typescript
// src/data.ts
export const data = {
    projetosFront: [
        {
            id: 1, 
            label: "Loja B7Story", 
            link: "/projetos/b7story", 
            linkProjeto: "https://b7store.vercel.app/", 
            img: "/assets/projetos/b7store.png", 
            github: "https://github.com/Marcio-Moraes/b7store", 
            tech: 'Reactjs, Nextjs, typescript, Tailwindcss, zustand', 
            desc: "Loja de vestuário com temas de tecnologia. Criada em NextJS no Front-End. Com carrinho de compra, frete, login, cadastro e muito mais."
        },
        {
            id: 2, 
            label: "Portfolio Pessoal", 
            link: "/projetos/portfolionext", 
            linkProjeto: "https://marciomsilva.com.br", 
            img: "/assets/projetos/portfolio-nextjs.png", 
            github: "https://github.com/Marcio-Moraes/portfolio-nextjs", 
            tech: 'Reactjs, Nextjs, Typescript, tailwindcss, Shadcn-UI', 
            desc: "Versão do meu Portfolio, com lista de projetos desenvolvidos, com link de deploy e github."
        }
    ],
    icones: [
        { id: 1, img: "/assets/iconspng/reactjs.png", nomeIcon: 'ReactJS' }, 
        { id: 2, img: "/assets/iconspng/nextjs.png", nomeIcon: 'Next.js' }, 
        { id: 3, img: "/assets/iconspng/typescript.png", nomeIcon: 'Typescript' }
    ]
}
```

### 2. Componente de Item do Projeto (`src/app/components/projetoItem.tsx`)
Componente responsável por receber um objeto de projeto e renderizar um card completo. Utiliza otimizações nativas do Next.js como `<Image />` para performance de carregamento de imagens e `<Link />` para roteamento dinâmico.

```tsx
// src/app/components/projetoItem.tsx
import { Projeto } from "@/type/projeto"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link";
import { BotaoProjetoItem } from "./layout/botaoProjetoItem";

type Props = {
    dadosType: Projeto;    
}

export const ProjetoItem = ({ dadosType }: Props) => {
    return (
        <div className="w-full rounded max-w-[400px] py-3.5 px-2 border border-amber-400">
            <Link href={dadosType.linkProjeto} target="_blank">
                <Image
                    src={`${dadosType.img}`}
                    alt={`${dadosType.label}`}
                    width={600}
                    height={280}
                    className="rounded object-cover"
                />
            </Link>
            <div className="flex justify-between py-6 px-4">
                <div className="w-full">
                    <h2 className="text-2xl text-amber-400 text-center font-bold mb-4 ">
                        {dadosType.label}
                    </h2>
                    
                    <p className="text-center hidden md:block text-gray-300">
                        {dadosType.desc}
                    </p>

                    <h3 className="mt-5 text-center text-sm">
                        Tecnologias utilizadas: <span className="font-semibold text-amber-300">{dadosType.tech}</span>
                    </h3>
                    
                    <div className="mt-4 flex justify-center gap-2.5">
                        <BotaoProjetoItem targetblank href={dadosType.github}>
                            <FaGithub /> GitHub
                        </BotaoProjetoItem>

                        <BotaoProjetoItem targetblank href={dadosType.linkProjeto}>
                            <FaExternalLinkAlt /> Deploy
                        </BotaoProjetoItem>
                    </div>
                </div>
            </div>
        </div>
    )
}
```

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos a seguir para rodar a aplicação em sua máquina de desenvolvimento:

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/Marcio-Moraes/portfolio-nextjs.git
   ```
2. **Navegar até a pasta do projeto**:
   ```bash
   cd portfolio-nextjs
   ```
3. **Instalar as dependências**:
   ```bash
   npm install
   ```
4. **Executar em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```
5. **Acessar no Navegador**:
   Acesse [http://localhost:3000](http://localhost:3000) para ver o projeto em tempo real.

---

## 📈 Próximos Passos & Melhorias Recomendadas

Com o objetivo de elevar o nível técnico e visibilidade do projeto, sugerem-se as seguintes melhorias futuras:

*   **Implementação de Internacionalização (i18n)**: Adicionar suporte a múltiplos idiomas (ex: Português e Inglês) usando bibliotecas integradas ao Next.js App Router para abrir portas globais.
*   **Otimização de SEO Avançada**: Configuração estruturada dos metadados Open Graph, Twitter Cards, geração dinâmica de `sitemap.xml` e `robots.txt` para melhor ranqueamento nos motores de busca.
*   **Migração de Dados para Headless CMS**: Conectar os dados de projetos e formação a um CMS headless (ex: Sanity.io ou Strapi) para permitir edição dinâmica sem necessidade de novos deploys.
*   **Configuração de Testes Automatizados**: Inclusão de testes unitários e de integração utilizando Jest, React Testing Library ou Playwright para garantir estabilidade contínua dos fluxos principais da página.
*   **Otimização de Imagens e Assets**: Certificar-se de converter imagens pesadas dos projetos para o formato WebP dinamicamente através do `next/image` configurado.
*   **Criação de uma área de Blog**: Criar uma seção de postagens baseadas em arquivos MDX para publicar insights de desenvolvimento front-end e impulsionar o SEO orgânico.
