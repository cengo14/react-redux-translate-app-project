import React, { useEffect, useState } from "react";

import Select from "./component/Select";
import TextArea from "./component/textArea";
import Button from "./component/Button";
import { useDispatch, useSelector } from "react-redux";
import { getLangs, translateText } from "./redux/actions";

const App = () => {
  const { answer } = useSelector((store) => store.translate);
  const [sourceLang, setSourceLang] = useState({
    label: "Turkish",
    value: "tr",
  });
  const [targetLang, setTargetLang] = useState({
    label: "English",
    value: "en",
  });
  const [text, setText] = useState();
  const [isRotated, setIsRotated] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLangs());
  }, []);

  const handleTranslate = () => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  };
  useEffect(() => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  }, [targetLang]);
  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(answer);
    setIsRotated(!isRotated);
  };
  return (
    <div className="bg-zinc-900 h-screen max-md:h-full pt-5 pb-[50px] text-white grid place-items-center">
      <div class="cardBox bg-zinc-600 md:mt-4  rounded-xl w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <div class="card">
          {/* Uygulama ismi */}
          <h1 className="text-center text-4xl font-semibold mb-7">
            Chat
            <span className="text-amber-500 font-extrabold">Ai</span> Translate
          </h1>
          {/* Buton ve select bölümü */}
          <Select
            sourceLang={sourceLang}
            targetLang={targetLang}
            setSourceLang={setSourceLang}
            setTargetLang={setTargetLang}
            handleSwap={handleSwap}
            isRotated={isRotated}
          />
          {/* Metin alanı */}
          <TextArea
            setText={setText}
            text={text}
            handleTranslate={handleTranslate}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
