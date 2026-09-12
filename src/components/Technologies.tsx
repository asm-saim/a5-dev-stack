import React, { use, useState } from "react";
import type { ITechData } from "../types";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";
interface TechDataProps {
  techData: Promise<ITechData[]>;
}

const Technologies = ({ techData }: TechDataProps) => {
  const allTechData = use(techData);
  console.log(allTechData);

  //state fro selected tech:
  const [selectedTech, setSelectedTech] = useState<ITechData[]>([]);

  return (
    <div className="mb-24">
      {/*Technology section title and subtitle */}
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-3">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#0f172a]">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#475569] text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto gap-4 sm:gap-5 p-4">
        <div className="md:col-span-3">
          <AvailableTech
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            allTechData={allTechData}
          ></AvailableTech>
        </div>
        <div className="md:col-span-1">
          <SelectedTech selectedTech={selectedTech} setSelectedTech={setSelectedTech}></SelectedTech>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
