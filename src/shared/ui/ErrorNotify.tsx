import { useTheme } from "@/app/providers/ThemeProvider";
import { ErrorIcon } from "@/shared/ui/icons/ErrorIcon";
import clsx from "clsx";

interface ErrorNotifyProps {
  text: string;
  type?: "error";
}

export const ErrorNotify: React.FC<ErrorNotifyProps> = ({
  text,
  type = "error",
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        "flex flex-row px-[26px] py-[14px] gap-[10px] rounded-[4px] h-auto",
        theme === "dark" ? "bg-[#0F1318]" : "bg-[#0F1318]"
      )}
    >
      {type === "error" ? <ErrorIcon /> : null}
      <p className="content-center font-inter text-lg font-medium">{text}</p>
    </div>
  );
};
