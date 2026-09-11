import React, { use } from "react";
import type { ITechData } from "../types";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";
interface TechDataProps {
  techData: Promise<ITechData[]>;
}

const Technologies = ({ techData }: TechDataProps) => {
  const allTechData = use(techData);
  console.log(allTechData);

  return (
    <div className="bg-amber-100">
      {/*Technology section title and subtitle */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-3">
        <h1 className="font-bold text-4xl text-[#0f172a]">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B] text-base">Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="bg-blue-300 grid grid-cols-4 max-w-6xl mx-auto gap-5 p-4">
        <div className="col-span-3 bg-emerald-100">{<AvailableTech allTechData={allTechData}></AvailableTech>}</div>
        <div className="col-span-1 bg-emerald-200">{<SelectedTech></SelectedTech>}</div>
      </div>
    </div>
  );
};

export default Technologies;
