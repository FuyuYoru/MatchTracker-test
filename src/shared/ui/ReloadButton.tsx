import clsx from "clsx";
import { ReloadIcon } from "./icons/ReloadIcon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const ReloadButton: React.FC<ButtonProps> = ({ text, disabled, ...props }) => {
    return (
        <button
            className={clsx(
                "bg-[#EB0237] p-4 rounded-[4px] h-[3.5rem] w-[12.75rem]",
                disabled
                    ? "bg-[#701328]"
                    : "active:bg-[#A01131]"

            )}
            disabled={disabled}
            {...props}>
            <span className="flex flex-row justify-center gap-[10px] text-lg font-inter font-[550]">
                {text}
                <ReloadIcon />
            </span>
        </button>
    )
}