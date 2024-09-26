import { cn } from "../../lib/utils";

export const BentoGrid = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
                className
            )}>
            {children}
        </div>)
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
}) => {
    const isImageHeader = typeof header === 'string';
    const isStaffCard = title === "CONOCE NUESTRO STAFF";

    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 flex flex-col space-y-4 justify-between",
                isStaffCard
                    ? "bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500 text-white justify-center items-center"
                    : "bg-white dark:bg-black dark:border-white/[0.2] border border-transparent",
                className
            )}
        >
            {isImageHeader ? (
                <img src={header} alt={title} className="w-full h-[214px] object-fill rounded-xl" />
            ) : (
                header
            )}
            <div className={cn(
                "group-hover/bento:translate-x-2 transition duration-200 flex flex-col justify-center items-center",
                isStaffCard ? "h-full" : ""
            )}>
                <div className={cn(
                    "mb-2 mt-2",
                    isStaffCard ? "text-white text-center font-bebas text-5xl" : "text-neutral-200 font-bold"
                )}>
                    {title}
                </div>
                <div className={cn(
                    "text-xs text-center",
                    isStaffCard ? "text-white text-xl" : "text-neutral-300"
                )}>
                    {description}
                </div>
            </div>
        </div>
    );
};
