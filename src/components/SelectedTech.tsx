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
    <div className="p-3 rounded-xl border border-slate-200 shadow-sm">
      {/* <h1>{selectedTech.length}</h1> */}
      <h1 className=" text-[#0f172a] font-bold text-base">Your Stack</h1>
      <p className="text-xs font-semibold text-[#687588] mt-1 mb-3">
        {selectedTech.length === 0 ? "No Technology selected yet" : `${selectedTech.length} Technology selected`}
      </p>
      <div className={`${selectedTech.length === 0 ? "border border-dashed border-slate-200 rounded-xl p-1" : ""}`}>
        <p
          className={`${selectedTech.length === 0 ? "flex h-28 justify-center items-center text-xs font-normal text-[#64748B]" : ""}`}
        >
          {`${selectedTech.length === 0 ? "Your stack is empty" : ""}`}
        </p>
        {selectedTech.map((cardSelected) => (
          <SelectedCard
            cardSelected={cardSelected}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
          ></SelectedCard>
        ))}
      </div>
      {selectedTech.length !== 0 && (
        <button className="btn flex-1 w-full mt-5 sm:flex-none bg-transparent border border-red-200 text-red-600 font-bold text-sm rounded-lg">
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedTech;
