import React, { type Dispatch, type SetStateAction } from "react";
import type { ITechData } from "../types";

interface SelectedTechProps {
  selectedTech: ITechData[];
  setSelectedTech: Dispatch<SetStateAction<ITechData[]>>;
}

const SelectedTech = ({ selectedTech, setSelectedTech }: SelectedTechProps) => {
  console.log(selectedTech);
  return (
    <div>
      <h1>{selectedTech.length}</h1>
      {/* <h2>{selectedTech.name}</h2> */}
    </div>
  );
};

export default SelectedTech;
