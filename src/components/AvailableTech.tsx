import React from "react";
import type { ITechData } from "../types";
import TechCard from "./TechCard";

interface AvailableTechData {
  allTechData: ITechData[];
}
const AvailableTech = ({ allTechData }: AvailableTechData) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {allTechData.map((techData) => (
        <TechCard key={techData.id} techData={techData}></TechCard>
      ))}
    </div>
  );
};

export default AvailableTech;
