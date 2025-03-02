import clsx from "clsx";
import { Match } from "../model";
import { useTheme } from "@/app/providers/ThemeProvider";
import { MatchStatus } from "@/shared/ui/MatchStatus";
import { TeamTitle } from "@/shared/ui/TeamTitle";

export const MatchCard: React.FC<{ matchData: Match }> = ({ matchData }) => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        "flex flex-row justify-between items-center p-4 rounded-[4px] w-full h-[90px]",
        theme === "dark" ? "bg-[#0B0E12]" : "bg-[#E5E7EB]"
      )}
    >
      <TeamTitle name={matchData.homeTeam.name} classNames="w-full"/>
      <div className="flex flex-col justify-center items-center gap-[4px] w-full">
        <p className="text-xl font-inter font-[500]">{matchData.homeScore + " : " + matchData.awayScore}</p>
        <MatchStatus MatchStatus={matchData.status} />
      </div>
      <TeamTitle name={matchData.awayTeam.name} classNames="flex-row-reverse w-full"/>
    </div>
  );
};
