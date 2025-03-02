import { Match } from "../model";
import { matches } from "@/mock/matches";

export const fetchMatches = async (): Promise<Match[]> => {
    try {
        const res = await new Promise<Match[]>((resolve) => {
            setTimeout(() => resolve(matches), 1000);
        });

        return res;
    } catch {
        throw new Error("Ошибка при загрузке матчей");
    }
};
