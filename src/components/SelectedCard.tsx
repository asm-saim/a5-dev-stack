import React, { type Dispatch, type SetStateAction } from "react";
import type { ITechData } from "../types";
import { X } from "lucide-react";
import { Bounce, toast } from "react-toastify";

interface ISelectedCardProps {
  cardSelected: ITechData;
  selectedTech: ITechData[];
  setSelectedTech: Dispatch<SetStateAction<ITechData[]>>;
}

const SelectedCard = ({ cardSelected, selectedTech, setSelectedTech }: ISelectedCardProps) => {
  //handle restore Tech by clicking cross sign:

  const handleAvailableTech = (cardSelected: ITechData) => {
    const restTechnology = selectedTech.filter((unMatchedTech) => unMatchedTech.id !== cardSelected.id);
    setSelectedTech(restTechnology);

    //toast for remove:
    toast.info(`${cardSelected.name} is Removed! `, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div className="flex justify-between items-center border border-slate-200 rounded-xl p-2 my-2">
      <div className="flex items-center justify-start gap-3">
        <img className="h-8 w-8 object-contain" src={cardSelected.icon} alt="" />
        <div>
          <h1 className="text-sm font-bold text-[#0f172a]">{cardSelected.name}</h1>
          <p className="text-[11px] font-medium text-[#64748b] ">{cardSelected.category}</p>
        </div>
      </div>
      <span onClick={() => handleAvailableTech(cardSelected)}>
        <X className="text-slate-400 cursor-pointer" size={23} />
      </span>
    </div>
  );
};

export default SelectedCard;
