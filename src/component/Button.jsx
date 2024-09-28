import React from "react";

import { RiTranslate } from "react-icons/ri";

const Button = () => {
  return (
    <button
      className="cursor-pointer transition-all bg-green-500 text-white px-6 py-2 rounded-lg
border-green-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] flex justify-center items-center gap-2 h-full"
    >
      <span className="text-lg">Çevir</span>
      <RiTranslate size={24} />
    </button>
  );
};

export default Button;
