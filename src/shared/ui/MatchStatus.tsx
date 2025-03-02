import clsx from "clsx";

type StatusType = "Scheduled" | "Ongoing" | "Finished";

export const MatchStatus: React.FC<{ MatchStatus: StatusType }> = ({
  MatchStatus,
}) => {
  const statusProps = {
    Scheduled: {
      style: "bg-[#EB6402]",
      text: "Match preparing",
    },
    Ongoing: {
      style: "bg-[#43AD28]",
      text: "Live",
    },
    Finished: {
      style: "bg-[#EB0237]",
      text: "Finished",
    },
  };

  return (
    <div
      className={clsx(
        "rounded-[4px] text-center content-center px-[8px] py-[6px] font-inter text-xs font-medium min-w-[5.75rem]",
        statusProps[MatchStatus].style
      )}
    >
      {statusProps[MatchStatus].text}
    </div>
  );
};
