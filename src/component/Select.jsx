import React, { useMemo, useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";

const Select = ({
  sourceLang,
  targetLang,
  setSourceLang,
  setTargetLang,
  handleSwap,
  isRotated,
}) => {
  const { isLoading, error, langs } = useSelector((store) => store.lang);

  const languages = useMemo(
    () =>
      langs.map((lang) => ({
        value: lang.code,
        label: lang.name,
      })),
    [langs]
  );

  return (
    <div className="md:w-3/4">
      <div className="flex gap-2 text-black">
        <ReactSelect
          onChange={(e) => setSourceLang(e)}
          isDisabled={isLoading}
          isLoading={isLoading}
          options={languages}
          value={sourceLang}
          className="flex-1"
        />

        <button
          onClick={handleSwap}
          className={`cursor-pointer transition-all bg-blue-500 text-white max-md:px-6 px-12 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] icon-button ${
            isRotated ? "rotated" : ""
          }`}
        >
          <HiSwitchHorizontal size={20} className="icon" />
        </button>

        <ReactSelect
          onChange={(e) => setTargetLang(e)}
          isDisabled={isLoading}
          isLoading={isLoading}
          options={languages}
          value={targetLang}
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default Select;
