import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { ITechData } from "./types";

//
const techDataFetch = async (): Promise<ITechData[]> => {
  const response = await fetch("/techData.json");
  const data: ITechData[] = await response.json();
  return data;
};

const techData = techDataFetch();

function App() {
  return (
    <>
      <div className="min-h-screen md:h-screen flex flex-col pt-[65px]">
        <Navbar />
        <Banner />
      </div>
      <Suspense fallback="Loading Technologies...">
        <Technologies techData={techData}></Technologies>
      </Suspense>
    </>
  );
}

export default App;
