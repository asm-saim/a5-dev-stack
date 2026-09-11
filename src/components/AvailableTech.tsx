import React, { type Dispatch, type SetStateAction } from "react";
import type { ITechData } from "../types";
import TechCard from "./TechCard";

interface AvailableTechData {
  allTechData: ITechData[];
  selectedTech: ITechData[];
  setSelectedTech: Dispatch<SetStateAction<ITechData[]>>;
}
const AvailableTech = ({ allTechData, selectedTech, setSelectedTech }: AvailableTechData) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {allTechData.map((techData) => (
        <TechCard key={techData.id} techData={techData} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></TechCard>
      ))}
    </div>
  );
};

export default AvailableTech;
