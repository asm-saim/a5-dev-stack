import { useState, type Dispatch, type SetStateAction } from "react";
import type { ITechData } from "../types";
import { Check, Ban } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import "../../src/index.css";
import { CheckCircle } from "lucide-react";

interface TechCardProps {
  techData: ITechData;
  selectedTech: ITechData[];
  setSelectedTech: Dispatch<SetStateAction<ITechData[]>>;
}

const TechCard = ({ techData, selectedTech, setSelectedTech }: TechCardProps) => {
  // console.log("form card", techData);

  //state  for button: Check whether this technology is already selected
  const buttonType = selectedTech.some((tech) => tech.id === techData.id);

  const handleButtonType = () => {
    setSelectedTech([...selectedTech, techData]);

    //Adding toast for add to Stack Button
    toast.success(`${techData.name} is Added to Stack!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      transition: Bounce,
      className: "toast-gradient",
    });
  };

  //Mouse hover ban sign:
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`w-full lg:max-w-sm rounded-xl border p-3 lg:p-4 shadow-sm ${
        buttonType ? "border-[#db2777]" : "border-slate-200"
      }`}
    >
      {/* Top section */}
      <div className="flex items-start justify-between gap-2 lg:gap-0">
        <img src={techData.icon} alt={techData.name} className="h-8 w-8 lg:h-10 lg:w-10 object-contain" />

        <span
          className="rounded-full px-2.5 lg:px-3 py-1 text-[10px] lg:text-xs font-bold whitespace-nowrap"
          style={{
            color: techData.primaryColor,
            backgroundColor: `${techData.primaryColor}30`,
          }}
        >
          {techData.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 lg:mt-5 flex-1">
        <h2 className="text-lg lg:text-xl font-bold text-[#0f172a]">{techData.name}</h2>

        <p className="mt-2 min-h-16 text-xs leading-5 text-[#64748B]">{techData.description}</p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-slate-100"></div>

      {/* Meta information */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 lg:gap-1 pr-0 lg:pr-2">
        <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-[#64748b]">{techData.category}</span>

        <span className="text-xs font-medium text-[#64748b]">{techData.difficulty}</span>

        <span className="flex items-center gap-1 text-sm font-medium text-[#475569]">
          <span className="text-amber-400">★</span>
          {techData.rating}
        </span>
      </div>

      {/* Button */}
      <div
        className={`relative mt-4 ${buttonType ? "cursor-none" : ""}`}
        onMouseEnter={() => buttonType && setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <button
          onClick={handleButtonType}
          disabled={buttonType}
          className={`btn h-10 w-full rounded-lg text-sm font-semibold ${
            buttonType ? "bg-[#e495b74f] text-[#db2777]" : "bg-[#0f172a] text-white hover:bg-slate-800"
          }`}
        >
          {buttonType ? "Added to Stack" : "Add to Stack"}
        </button>

        {buttonType && isHovering && (
          <Ban
            size={20}
            className="pointer-events-none absolute text-red-700"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TechCard;
