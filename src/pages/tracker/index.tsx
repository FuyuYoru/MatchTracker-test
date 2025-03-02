import { useMatchStore } from "@/features/matches/store";
import { MatchCard } from "@/features/matches/ui/MatchCard";
import { MatchCardSkeleton } from "@/features/matches/ui/MatchCardSkeleton";
import { ErrorNotify } from "@/shared/ui/ErrorNotify";
import { ReloadButton } from "@/shared/ui/ReloadButton";
import { useEffect } from "react";

export const Tracker: React.FC = () => {
  const { matches, isLoading, fetchError, fetchMatches } = useMatchStore();

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  return (
    <div className="h-full w-full flex flex-col p-[2.625rem]">
      {/* Header */}
      <div className="flex flex-row justify-between">
        <h1 className="italic text-[32px] font-tactic font-bold">
          Match Tracker
        </h1>
        <div className="flex flex-row gap-[12px] items-center">
          {fetchError && (
            <ErrorNotify text="Ошибка: не удалось загрузить информацию" />
          )}
          <ReloadButton text="Обновить" onClick={fetchMatches} />
        </div>
      </div>

      <div className="w-full h-full bg-transparent flex flex-col gap-[12px] py-5">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <MatchCardSkeleton key={i} />
            ))
          : matches.map((match, i) => (
              <MatchCard key={i} matchData={match} />
            ))}
      </div>
    </div>
  );
};
