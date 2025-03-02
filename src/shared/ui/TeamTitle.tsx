import clsx from "clsx";
import { FC } from "react";

interface TeamTitleProps {
  name: string;
  classNames?: string;
//   icon?: FC<{ className?: string }>;
}

export const TeamTitle: FC<TeamTitleProps> = ({
  name,
  classNames = "",
//   icon: Icon = TeamIcon,
}) => {
  return (
    <div className={clsx("bg-transparent flex flex-row items-center gap-[14px] text-base font-inter font-[500] p-4", classNames)}>
      {/* <Icon className="w-6 h-6 mr-2" /> */}
      <img src="src/mock/teamIcon.png" />
      <p>{name}</p>
    </div>
  );
};
