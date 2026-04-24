type Props = {
    title1: string | string[];
    title2: string;
    mt?: string;
    mb?: string;
}

export const Titulo = ({title1, title2, mt, mb}: Props) => {
    return(
        <div className="flex flex-col items-center">
            <h1 className={`font-bold text-[36px] md:text-[72px] flex justify-center gap-3 ${mt ? " "+mt : ''}`}>
                {title1}
                <span className="text-amber-400">{title2}</span>
            </h1>
            <div className={`w-full max-w-xs h-0.5 bg-amber-400 ${mb ? " "+mb : 'mb-3'}`}></div>
        </div>
    )
}