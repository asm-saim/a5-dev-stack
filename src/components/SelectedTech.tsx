import React, { type Dispatch, type SetStateAction } from "react";
import type { ITechData } from "../types";
import SelectedCard from "./SelectedCard";

interface SelectedTechProps {
  selectedTech: ITechData[];
  setSelectedTech: Dispatch<SetStateAction<ITechData[]>>;
}

const SelectedTech = ({ selectedTech, setSelectedTech }: SelectedTechProps) => {
  console.log(selectedTech);
  return (
    <div className="p-3 rounded-xl border border-slate-200">
      {/* <h1>{selectedTech.length}</h1> */}
      <h1 className=" text-[#0f172a] font-bold text-base">Your Stack</h1>
      <p className="text-xs font-semibold text-[#687588] my-1">
        {selectedTech.length === 0 ? "No Technology selected yet" : `${selectedTech.length} Technology selected`}
      </p>
      {
        selectedTech.map(cardSelected=><SelectedCard cardSelected={cardSelected}></SelectedCard>)
      }
    </div>
  );
};

export default SelectedTech;
