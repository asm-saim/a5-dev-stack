import type { ITechData } from "../types";

interface TechCardProps {
  techData: ITechData;
}

const TechCard = ({ techData }: TechCardProps) => {
  console.log("form card", techData);
  return (
    <div className="w-full max-w-sm h-[305px] rounded-xl border border-slate-100 bg-white p-4 shadow-sm flex flex-col">
      {/* Top section */}
      <div className="flex items-start justify-between">
        <img src={techData.icon} alt={techData.name} className="h-10 w-10 object-contain" />

        <span
  className="rounded-full px-3 py-1 text-xs font-bold"
  style={{
    color: techData.primaryColor,
    backgroundColor: `${techData.primaryColor}30`,
  }}
>
  {techData.badge}
</span>
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">
        <h2 className="text-xl font-bold text-[#0f172a]">{techData.name}</h2>

        <p className="mt-2 min-h-16 text-xs leading-5 text-[#64748B]">{techData.description}</p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-slate-100"></div>

      {/* Meta information */}
      <div className="flex items-center justify-between gap-1 pr-2">
        <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-[#64748b]">{techData.category}</span>

        <span className="text-xs font-medium text-[#64748b]">{techData.difficulty}</span>

        <span className="flex items-center gap-1 text-sm font-medium text-[#475569]">
          <span className="text-amber-400">★</span>
          {techData.rating}
        </span>
      </div>

      {/* Button */}
      <button className="btn mt-4 h-10 w-full rounded-lg bg-[#0f172a] text-sm font-medium text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
