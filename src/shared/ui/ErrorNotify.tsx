import { ErrorIcon } from "@/shared/ui/ErrorIcon"

export const ErrorNotify: React.FC<{text: string, type: 'error'}> = ({text, type = 'error'}) => {
    return (
        <div className="flex flex-row p-4 gap-[10px]">
            {type === 'error' ?? <ErrorIcon />}
            <p>{text}</p>
        </div>
    )
}