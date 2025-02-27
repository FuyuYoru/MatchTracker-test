import { TeamIcon } from "@/shared/ui/TeamIcon";
import { FC } from "react";

interface TeamTitleProps {
    name: string;
    icon?: FC<{ className?: string }>;
}

export const TeamTitle: FC<TeamTitleProps> = ({ name, icon: Icon = TeamIcon }) => {
    return (
        <div className="bg-transparent flex flex-row">
            <Icon className="w-6 h-6 mr-2" />
            <p>{name}</p>
        </div>
    );
};
 