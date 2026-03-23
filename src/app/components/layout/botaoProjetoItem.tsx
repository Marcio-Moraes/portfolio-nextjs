import Link from "next/link"

export function BotaoProjetoItem({ children, href, targetblank }: { children: React.ReactNode; href: string; targetblank?: boolean }) {
    return (
        <Link href={href} target={targetblank ? "_blank" : ""} className="rounded bg-amber-400 text-black font-semibold uppercase px-6 py-2 flex justify-center items-center gap-2 md:my-5 hover:opacity-75 text-center">
            {children}
        </Link>
    )
}