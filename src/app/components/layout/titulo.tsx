type Props = {
    title1: string;
    title2: string;
}

export const Titulo = ({title1, title2}: Props) => {
    return(
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-[36px] md:text-[42px] flex justify-center gap-3">
                {title1}
                <span className="text-amber-400">{title2}</span>
            </h1>
            <div className="w-full max-w-xs h-0.5 mb-3 bg-amber-400"></div>
        </div>
    )
}