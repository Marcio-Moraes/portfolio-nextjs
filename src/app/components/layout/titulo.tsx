type Props = {
    title1: string;
    title2: string;
}

export const Titulo = ({title1, title2}: Props) => {
    return(
        <h1 className="font-bold text-[48px] md:text-[52px] flex justify-center gap-5">
            {title1}
            <span className="text-amber-400">{title2}</span>
        </h1>
    )
}