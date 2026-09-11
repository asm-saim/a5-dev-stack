import React, { use } from "react";
import type { ITechData } from "../types";
interface TechDataProps {
  techData: Promise<ITechData[]>;
}

const Technologies = ({ techData }: TechDataProps) => {
  const allTechData = use(techData);
  console.log(allTechData);

  return <div></div>;
};

export default Technologies;
