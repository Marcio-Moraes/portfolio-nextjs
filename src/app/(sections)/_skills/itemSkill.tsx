import Image from "next/image";

type ItemSkillProps = {
    iconUrl: string;
    iconName: string;
}

export default function ItemSkill({ iconUrl, iconName }: ItemSkillProps) {
    return (
        <div className="p-1 border border-gray-800 bg-gray-700 rounded-md w-18 h-18 md:w-23 md:h-23 flex flex-col justify-center items-center">
            <div className="">
                <Image
                    src={iconUrl}
                    alt={iconName}
                    width={40}
                    height={40}
                    className="w-6 h-6 md:w-10 md:h-10"
                />
            </div>
            <span className="text-[10px] mt-2 text-center">{iconName}</span>
        </div>
    );
}