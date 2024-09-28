import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { RiTranslate } from "react-icons/ri";

const TextArea = ({ setText, text, handleTranslate }) => {
  const { isLoading, error, answer } = useSelector((store) => store.translate);
  console.log(answer, error);

  return (
    <div className="md:w-3/4 max-md:w-2/3">
      <div className="flex gap-1 mt-5 max-md:flex-col md:items-center">
        <div className="flex-1  ">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full min-h-[200px] max-h-[500px] text-black text-[20px] rounded p-[10px] "
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleTranslate}
            className="cursor-pointer transition-all bg-green-500 text-white px-6 py-11 max-md:px-6 max-md:py-2 rounded-full
border-green-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] flex justify-center items-center gap-2 max-md:w-full"
          >
            <span className="text-lg">Çevir</span>
            <RiTranslate size={24} />
          </button>
        </div>
        <div className="flex-1 relative">
          <textarea
            value={error ? error : answer === "Undefineded" ? "" : answer}
            disabled
            className="w-full min-h-[200px] max-h-[400px] text-gray-100 text-[20px] rounded p-[10px]"
          ></textarea>
          {isLoading && (
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
